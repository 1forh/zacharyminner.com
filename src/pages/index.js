import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Zach's Digital Garden" />
    <div className="container grid grid-cols-12 py-10">
      <div className="col-span-12 space-y-8 md:col-span-6 md:col-start-4">
        <div>
          <h2 className="mb-4">Articles</h2>
          <ul className="pl-5 list-disc list-outside">
            {data.allMdx.edges
              .filter((edge) => edge.node.fields.category === 'articles')
              .map(({ node }) => (
                <li key={node.id}>
                  <Link to={node.fields.slug} key={node.id} className="font-bold text-primary-500 hover:text-primary-800 visited:text-primary-400">
                    {node.frontmatter.title}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-4">Games</h2>
          <ul className="pl-5 list-disc list-outside">
            {data.allMdx.edges
              .filter((edge) => edge.node.fields.category === 'games')
              .map(({ node }) => (
                <li key={node.id}>
                  <Link to={node.fields.slug} key={node.id} className="font-bold text-primary-500 hover:text-primary-800 visited:text-primary-400">
                    {node.frontmatter.title}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-4">Projects</h2>
          <ul className="pl-5 list-disc list-outside">
            {data.allMdx.edges
              .filter((edge) => edge.node.fields.category === 'projects')
              .map(({ node }) => (
                <li key={node.id}>
                  <Link to={node.fields.slug} key={node.id} className="font-bold text-primary-500 hover:text-primary-800 visited:text-primary-400">
                    {node.frontmatter.title}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  </Layout>
);

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
