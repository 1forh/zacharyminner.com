import React from 'react';
import { Link } from 'gatsby';
import CONFIG from '../../zach.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = ({ isHome }) => {
  return (
    <div>
      <div className="container relative flex items-center">
        <header className="md:mr-24 lg:mr-32">
          {isHome && (
            <h1>
              <Link to="/" className="inline-block px-2 py-1 font-black text-white bg-green-500 rounded-b-md text-34">
                ZM
                <span className="sr-only">Zachary Minner</span>
              </Link>
            </h1>
          )}
          {!isHome && (
            <Link to="/" className="inline-block px-2 py-1 font-black text-white bg-green-500 rounded-b-md text-34">
              ZM
              <span className="sr-only">Zachary Minner</span>
            </Link>
          )}
        </header>

        <div className="absolute right-0 flex items-center mr-4 space-x-5">
          <Link to={CONFIG.social.instagram} className="flex items-center text-gray-800 hover:text-green-500" target="_blank">
            <FontAwesomeIcon icon={['fab', 'instagram']} className="text-28" />
          </Link>
          <Link to={CONFIG.social.twitter} className="flex items-center text-gray-800 hover:text-green-500" target="_blank">
            <FontAwesomeIcon icon={['fab', 'twitter']} className="text-28" />
          </Link>
          <Link to={CONFIG.social.linkedin} className="flex items-center text-gray-800 hover:text-green-500" target="_blank">
            <FontAwesomeIcon icon={['fab', 'linkedin-in']} className="text-28" />
          </Link>
          <Link to={CONFIG.social.github} className="flex items-center text-gray-800 hover:text-green-500" target="_blank">
            <FontAwesomeIcon icon={['fab', 'github']} className="text-28" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
