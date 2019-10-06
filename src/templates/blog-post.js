import React from 'react';
import { graphql } from 'gatsby';

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
        <article>
          <header>
            <h1>{title}</h1>
            <p>{date}</p>
          </header>
          <section>
            <img src={featured_image} alt={title} />
            <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
          </section>
        </article>
        <footer>
          <Pager previous={previous} next={next} />
        </footer>
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
