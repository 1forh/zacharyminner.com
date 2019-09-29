import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import './layout.css';

class Layout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div class="site-wrapper">
        <Helmet>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossorigin="anonymous"
          />
        </Helmet>
        <nav className="navbar navbar-dark bg-dark">
          <Link to={`/`} className="navbar-brand" href="#">
            Zach Minner
          </Link>
        </nav>
        <main className="site-main">
          <div className="container">
            <div className="row">
              <div className="col-8 offset-2">{children}</div>
            </div>
          </div>
        </main>
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
