/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

import Header from '../header';
import Plant from '../plant';
import './layout.css';

const Layout = ({ children }) => {
  library.add(faInstagram, faGithub, faChevronLeft);

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
