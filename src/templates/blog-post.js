import React from 'react';
import { graphql } from 'gatsby';
import { Box, Heading, Image, Paragraph } from 'grommet';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Pager from '../components/pager';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;
    const { title, description, date, featured_image } = post.frontmatter;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={title} description={description || post.excerpt} />
        <Box as="article" direction="column" style={{ minHeight: 'unset' }}>
          <Box as="header" margin={{ bottom: 'medium' }} direction="column">
            <Heading level="1" margin="none">
              {title}
            </Heading>
            <Paragraph margin={{ top: 'small', bottom: 'none' }} size="large">
              {date}
            </Paragraph>
          </Box>
          <Box as="section" style={{ minHeight: 'unset' }}>
            <Image src={featured_image} alt={title} />
            <Box dangerouslySetInnerHTML={{ __html: post.html }}></Box>
          </Box>
          <Box as="footer" style={{ minHeight: 'unset' }}>
            <Pager previous={previous} next={next} />
          </Box>
        </Box>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        featured_image
      }
    }
  }
`;
