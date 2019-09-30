import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import { rhythm, scale } from '../utils/typography';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article>
          <header
            style={{
              backgroundColor: '#eee',
              paddingTop: rhythm(2),
              paddingBottom: rhythm(2),
              marginBottom: rhythm(2),
              textAlign: 'center',
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-10 offset-1">
                  <h1>{post.frontmatter.title}</h1>
                  <p
                    style={{
                      ...scale(-1 / 5),
                      display: `block`,
                      marginBottom: 0,
                    }}
                  >
                    {post.frontmatter.date}
                  </p>
                </div>
              </div>
            </div>
          </header>
          <section>
            <div className="container">
              <div className="row">
                <div
                  className="col-8 offset-2"
                  dangerouslySetInnerHTML={{ __html: post.html }}
                ></div>
              </div>
            </div>
          </section>
        </article>

        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
              margin: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
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
      }
    }
  }
`;
