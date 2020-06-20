import React from 'react';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Image from '../components/image';
import CodeBlock from '../components/code-block';

const components = { Link, Image, code: CodeBlock };

export default function LayoutGarden({ data: { mdx } }) {
  return (
    <Layout>
      <SEO title={mdx.frontmatter.title} />
      <div className="container py-10 layout-garden">
        <div className="grid grid-cols-12">
          <div className="col-span-6 col-start-4">
            <h1 class="mb-4">{mdx.frontmatter.title}</h1>
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
      }
    }
  }
`;
