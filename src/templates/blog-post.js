import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import Pager from '../components/pager';
import { rhythm, scale } from '../utils/typography';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;
    const { title, description, date, featured_image } = post.frontmatter;

    console.log(this.props);

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={title} description={description || post.excerpt} />
        <article>
          <header
            style={{
              backgroundColor: 'var(--color-gray-lighter',
              paddingTop: rhythm(2),
              paddingBottom: rhythm(2),
              marginBottom: rhythm(2),
              textAlign: 'center',
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-10 offset-md-1">
                  <h1
                    style={{
                      marginBottom: rhythm(1 / 3),
                    }}
                  >
                    {title}
                  </h1>
                  <p
                    style={{
                      ...scale(-1 / 5),
                      display: `block`,
                      marginBottom: 0,
                      color: 'var(--color-gray',
                    }}
                  >
                    {date}
                  </p>
                </div>
              </div>
            </div>
          </header>
          <section>
            <div className="container">
              <div className="row">
                <img
                  className="col-12 col-md-8 offset-md-2"
                  src={featured_image}
                  alt={title}
                />
                <div
                  className="col-12 col-md-8 offset-md-2"
                  dangerouslySetInnerHTML={{ __html: post.html }}
                ></div>
              </div>
            </div>
          </section>
        </article>

        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8 offset-2">
              <Pager previous={previous} next={next} />
            </div>
          </div>
        </div>
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
