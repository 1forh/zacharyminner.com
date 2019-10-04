import React from 'react';
import { Link } from 'gatsby';
import './layout.css';

class Layout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className="site-wrapper">
        <nav className="navbar navbar-dark bg-dark">
          <Link to={`/`} className="navbar-brand" href="#">
            Zach Minner
          </Link>
        </nav>
        <main className="site-main">{children}</main>
        <footer className="site-footer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                © {new Date().getFullYear()}. Built with{' '}
                <a href="https://www.gatsbyjs.org">Gatsby</a>.
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Layout;
