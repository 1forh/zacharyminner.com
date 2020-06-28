import React from 'react';
import { Link } from 'gatsby';
import CONFIG from '../../zach.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  return (
    <div className="py-3">
      <div className="container relative flex justify-center">
        <Link to="/" className="pb-1 font-bold border-green-500 border-b-3 text-24 hover:text-green-700 hover:border-green-700">
          <strong>Zach</strong> <span className="font-light">Minner</span>
        </Link>

        <div class="absolute top-1/2 transform -translate-y-1/2 right-0 mr-4 space-x-5 flex items-center">
          <Link to={CONFIG.social.instagram} className="flex items-center hover:text-green-500" target="_blank">
            <FontAwesomeIcon icon={['fab', 'instagram']} className="text-28" />
          </Link>
          <Link to={CONFIG.social.github} className="flex items-center hover:text-green-500" target="_blank">
            <FontAwesomeIcon icon={['fab', 'github']} className="text-28" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
