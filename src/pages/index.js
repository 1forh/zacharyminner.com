import React from 'react';
import { graphql } from 'gatsby';
import { Anchor, Box, Image } from 'grommet';

import Layout from '../components/layout';
import SEO from '../components/seo';

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Blog" />
        <Box>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug;
            const image = node.frontmatter.featured_image;
            return (
              <article key={node.fields.slug}>
                <Image src={image} alt={title} />
                <header>
                  <h3>
                    <Anchor href={node.fields.slug}>{title}</Anchor>
                  </h3>
                  <small>{node.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                </section>
              </article>
            );
          })}
        </Box>
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            featured_image
          }
        }
      }
    }
  }
`;
