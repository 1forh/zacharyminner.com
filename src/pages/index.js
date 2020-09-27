import React from 'react';
import { graphql, Link } from 'gatsby';
import BalanceText from 'react-balance-text';
import Divider from '../components/divider';
import Seo from '../components/seo';
import Layout from '../components/layout/layout';
import Image from '../components/image';

const IndexPage = ({ data, location }) => {
  const isHome = location.pathname === '/';

  return (
    <Layout isHome={isHome}>
      <Seo title="Projects, games, ideas" />
      <div className="container py-10">
        <div className="flex">
          <div className="flex-grow leading-normal md:mr-20 text-24">
            I'm a web developer building websites and applications at{' '}
            <a href="https://www.skycatchfire.com/" target="_blank" rel="noreferrer" className="font-bold">
              SKYCATCHFIRE
            </a>
            . I live in North Canton with my beautiful girlfriend Haley, my playful cat Ava, and my tiny kitten Lily. I'm a Zach of all trades and I'm always trying to learn more about myself and
            everything else.
          </div>
          <div style={{ width: '175px', height: '175px' }} className="flex-shrink-0 hidden overflow-hidden border-4 border-gray-900 border-solid rounded-full md:block header-image">
            <Image filename="zach-and-haley.png" />
          </div>
        </div>

        <Divider />

        <div className="grid grid-cols-1">
          <div>
            <h2 className="mb-8 font-black text-24">Notes</h2>
            <ul className="grid row-gap-10 col-gap-16 md:grid-cols-2">
              {data.allMdx.edges
                .filter((edge) => edge.node.fields.category === 'articles')
                .map(({ node }) => (
                  <li key={node.id}>
                    <h3 className="flex mb-2">
                      <Link to={node.fields.slug} key={node.id} className="inline-block font-bold text-20">
                        <BalanceText>{node.frontmatter.title}</BalanceText>
                      </Link>
                    </h3>
                    <div>{node.frontmatter.summary}</div>
                  </li>
                ))}
            </ul>
          </div>

          <Divider />

          <div>
            <h2 className="mb-8 font-black text-24">Projects</h2>
            <ul className="grid row-gap-10 col-gap-16 md:grid-cols-2">
              {data.allMdx.edges
                .filter((edge) => edge.node.fields.category === 'projects')
                .map(({ node }) => (
                  <li key={node.id} className="space-y-3">
                    <h3 className="flex">
                      <Link to={node.fields.slug} key={node.id} className="inline-block font-bold text-20 balance-text">
                        <BalanceText>{node.frontmatter.title}</BalanceText>
                      </Link>
                    </h3>

                    <div>{node.frontmatter.summary}</div>

                    <div className="flex items-center space-x-4">
                      {node.frontmatter.tags.map((tag) => (
                        <div key={tag} className="inline-flex items-center px-3 py-0.5 rounded-full text-12 font-medium leading-5 bg-indigo-100 text-indigo-800">
                          {tag}
                        </div>
                      ))}
                    </div>
                  </li>
                ))}
            </ul>
          </div>

          <Divider />

          <div>
            <h2 className="mb-8 font-black text-24">Code Snippets</h2>
            <ul>
              {data.allMdx.edges
                .filter((edge) => edge.node.fields.category === 'snippets')
                .map(({ node }) => (
                  <li key={node.id}>
                    <h3 className="flex mb-2">
                      <Link to={node.fields.slug} key={node.id} className="inline-block font-bold text-20 balance-text">
                        <BalanceText>{node.frontmatter.title}</BalanceText>
                      </Link>
                    </h3>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    allMdx {
      edges {
        node {
          id
          frontmatter {
            title
            summary
            date
            tags
          }
          fields {
            slug
            category
          }
        }
      }
    }
  }
`;
