/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header';
import Plant from '../plant';
import './layout.css';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-secondary">
      <Header />
      <main>{children}</main>
      <Plant />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
