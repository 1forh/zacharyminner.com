import React from 'react';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BalanceText from 'react-balance-text';

import Layout from '../layout/layout';
import SEO from '../seo';
// import Back from '../back';
import CodeBlock from '../code-block';
import './layout-garden.css';

const components = { Link, code: CodeBlock };

export default function LayoutGarden({ data: { mdx } }) {
  return (
    <Layout>
      <SEO title={mdx.frontmatter.title} description={mdx.frontmatter.summary} />
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="pt-6 pb-10 mx-auto md:pt-10 max-w-prose">
          <div className="mb-4">
            {/* <Back /> */}
            <div className="mx-auto mb-4 text-lg max-w-prose">
              <h1 className="flex items-center justify-center text-3xl font-extrabold tracking-tight text-center sm:text-4xl sm:leading-10">
                <BalanceText>{mdx.frontmatter.title}</BalanceText>
                {mdx.frontmatter.website && (
                  <Link to={mdx.frontmatter.website} className="flex items-center p-3" target="_blank">
                    <FontAwesomeIcon icon={['fas', 'link']} className="text-20" />
                  </Link>
                )}
              </h1>
            </div>
            <div className="flex items-center justify-center mb-4 space-x-4">
              {mdx.frontmatter.website &&
                mdx.frontmatter.tags.map((tag) => (
                  <div key={tag} className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-indigo-100 text-indigo-800">
                    {tag}
                  </div>
                ))}
            </div>
          </div>
          <div className="prose">
            <MDXProvider components={components}>
              <MDXRenderer>{mdx.body}</MDXRenderer>
            </MDXProvider>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query GardenQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        website
        summary
        tags
      }
    }
  }
`;
