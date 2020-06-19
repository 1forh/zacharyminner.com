import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Zach's Digital Garden" />
    <div className="container grid grid-cols-12 py-20 mx-auto">
      <div className="col-span-6 col-start-4 space-y-8">
        testing
        {/* {data.allMarkdownRemark.edges.map(({ node }) => (
          <Link to={node.fields.slug} key={node.id} className="block p-4 bg-gray-200 border border-gray-300">
            <h3>
              {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
            </h3>
            <p>{node.frontmatter.summary}</p>
          </Link>
        ))} */}
      </div>
    </div>
  </Layout>
);

export default IndexPage;

// export const query = graphql`
//   query {
//     allMarkdownRemark {
//       totalCount
//       edges {
//         node {
//           frontmatter {
//             title
//             date
//             summary
//           }
//           fields {
//             slug
//           }
//           id
//           excerpt
//         }
//       }
//     }
//   }
// `;
