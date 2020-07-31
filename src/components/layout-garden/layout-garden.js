import React from 'react';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Link } from 'gatsby';

import Layout from '../layout/layout';
import SEO from '../seo';
import Back from '../back';
import CodeBlock from '../code-block';
import './layout-garden.css';

const components = { Link, code: CodeBlock };

export default function LayoutGarden({ data: { mdx } }) {
  return (
    <Layout>
      <SEO title={mdx.frontmatter.title} description={mdx.frontmatter.summary} />
      <div className="container pt-6 pb-10">
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-10 md:col-start-2">
            <Back />
            <div className="wizzy">
              <h1 className="mb-4">{mdx.frontmatter.title}</h1>
              {mdx.frontmatter.website && (
                <Link to={mdx.frontmatter.website} className="inline-flex mb-6" target="_blank">
                  View website
                </Link>
              )}
              <MDXProvider components={components}>
                <MDXRenderer>{mdx.body}</MDXRenderer>
              </MDXProvider>
            </div>
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
      }
    }
  }
`;
