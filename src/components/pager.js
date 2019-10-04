import React from 'react';
import { Link } from 'gatsby';

import { rhythm } from '../utils/typography';

class Pager extends React.Component {
  render() {
    const { previous, next } = this.props;

    return (
      <nav
        style={{
          marginTop: rhythm(3),
          marginBottom: rhythm(3),
        }}
      >
        <ul
          class="d-flex justify-items-center d-md-block"
          style={{
            listStyle: `none`,
            padding: 0,
            margin: 0,
          }}
        >
          {previous && (
            <li>
              <Link
                to={previous.fields.slug}
                rel="prev"
                className="btn btn-secondary"
              >
                ← {previous.frontmatter.title}
              </Link>
            </li>
          )}
          {next && (
            <li>
              <Link
                to={next.fields.slug}
                rel="next"
                className="btn btn-secondary"
              >
                {next.frontmatter.title} →
              </Link>
            </li>
          )}
        </ul>
      </nav>
    );
  }
}

export default Pager;
