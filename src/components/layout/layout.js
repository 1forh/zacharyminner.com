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
import { faInstagram, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

import Header from '../header';
import Plant from '../plant';
import './layout.css';

const Layout = ({ children, isHome }) => {
  library.add(faInstagram, faGithub, faChevronLeft, faTwitter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50">
      <Header isHome={isHome} />
      <main>{children}</main>
      <Plant />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isHome: PropTypes.bool,
};

export default Layout;
