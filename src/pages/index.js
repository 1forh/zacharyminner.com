import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import { rhythm } from '../utils/typography';

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Blog" />
        <div
          className="container"
          style={{
            marginTop: rhythm(2),
          }}
        >
          <div className="row">
            <div className="col-12 col-md-8 offset-md-2">
              {posts.map(({ node }) => {
                console.log(node);
                const title = node.frontmatter.title || node.fields.slug;
                return (
                  <article
                    key={node.fields.slug}
                    style={{
                      marginBottom: rhythm(1.5),
                    }}
                  >
                    {/* <img src={node.frontmatter.image} alt="" /> */}
                    <header
                      style={{
                        marginBottom: rhythm(1 / 2),
                      }}
                    >
                      <h3
                        style={{
                          marginBottom: 0,
                        }}
                      >
                        <Link
                          style={{ boxShadow: `none` }}
                          to={node.fields.slug}
                        >
                          {title}
                        </Link>
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
            </div>
          </div>
        </div>
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
