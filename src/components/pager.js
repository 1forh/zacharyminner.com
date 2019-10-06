import React from 'react';
import { Link } from 'gatsby';

class Pager extends React.Component {
  render() {
    const { previous, next } = this.props;

    return (
      <nav>
        <ul>
          {previous && (
            <li>
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            </li>
          )}
          {next && (
            <li>
              <Link to={next.fields.slug} rel="next">
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
