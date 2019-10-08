import React from 'react';
import { graphql } from 'gatsby';
import { Anchor, Box, Grid, Heading, Paragraph } from 'grommet';

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
        <Grid columns={['50%', '50%']} gap="medium">
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug;
            return (
              <Box
                as="article"
                key={node.fields.slug}
                style={{ minHeight: 'unset' }}
                margin={{ bottom: 'medium' }}
              >
                <Box as="header" margin={{ bottom: 'small' }}>
                  <Heading level="2" margin={{ bottom: 'small' }}>
                    <Anchor href={node.fields.slug}>{title}</Anchor>
                  </Heading>
                  <small>{node.frontmatter.date}</small>
                </Box>
                <Box as="section">
                  <Paragraph
                    margin="none"
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                </Box>
              </Box>
            );
          })}
        </Grid>
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
          }
        }
      }
    }
  }
`;
