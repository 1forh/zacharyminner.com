import React from 'react';
import { graphql, Link } from 'gatsby';
import BalanceText from 'react-balance-text';
import Divider from '../components/divider';
import Seo from '../components/seo';
import Layout from '../components/layout/layout';

const IndexPage = ({ data, location }) => {
  const isHome = location.pathname === '/';

  return (
    <Layout isHome={isHome}>
      <Seo title="Projects, games, ideas" />
      <div className="container pb-10">
        <div className="grid grid-cols-1">
          <Divider />

          <div>
            <h2 className="mb-8 font-black text-24">Notes</h2>
            <ul className="grid row-gap-10 col-gap-16 md:grid-cols-2">
              {data.allMdx.edges
                .filter((edge) => edge.node.fields.category === 'articles')
                .map(({ node }) => (
                  <li key={node.id}>
                    <h3 className="flex mb-2">
                      <Link to={node.fields.slug} key={node.id} className="inline-block font-bold text-20 balance-text">
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
            <h2 className="mb-8 font-black text-24">Web Projects</h2>
            <ul className="grid row-gap-10 col-gap-16 md:grid-cols-2">
              {data.allMdx.edges
                .filter((edge) => edge.node.fields.category === 'projects')
                .map(({ node }) => (
                  <li key={node.id}>
                    <h3 className="flex mb-2">
                      <Link to={node.fields.slug} key={node.id} className="inline-block font-bold text-20 balance-text">
                        <BalanceText>{node.frontmatter.title}</BalanceText>
                      </Link>
                    </h3>
                    <div>{node.frontmatter.summary}</div>
                  </li>
                ))}
            </ul>
          </div>

          <Divider />

          <div className="grid row-gap-10 md:grid-cols-2 md:col-gap-16">
            <div>
              <h2 className="mb-8 font-black text-24">Games Made With Unity</h2>
              <ul>
                {data.allMdx.edges
                  .filter((edge) => edge.node.fields.category === 'games')
                  .map(({ node }) => (
                    <li key={node.id}>
                      <h3 className="flex mb-2">
                        <Link to={node.fields.slug} key={node.id} className="inline-block font-bold text-20 balance-text">
                          <BalanceText>{node.frontmatter.title}</BalanceText>
                        </Link>
                      </h3>
                      <div>{node.frontmatter.summary}</div>
                    </li>
                  ))}
              </ul>
            </div>

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
