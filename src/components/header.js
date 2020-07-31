import React from 'react';
import { Link } from 'gatsby';
import Image from '../components/image';
// import CONFIG from '../../zach.config';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = ({ isHome }) => {
  return (
    <div className="pt-8">
      <div className="container relative flex items-center">
        <header className="md:mr-24 lg:mr-32">
          <Link to="/" className="inline-block mb-4 font-black text-34">
            <span className="hidden md:inline">Heyo, I'm</span> <strong>Zach</strong> Minner<span className="hidden md:inline">!</span>
          </Link>
          {/* prettier-ignore */}
          {isHome && (
            <div className="leading-normal text-18">
              I'm a web developer building websites and applications at{' '}
              <a href="https://www.skycatchfire.com/" target="_blank" rel="noreferrer" className="font-bold">
                SKYCATCHFIRE
              </a>
              . I live in North Canton with my beautiful girlfriend Haley and my asshole cat Ava. I'm a Zach of all trades and I'm always trying to learn more about myself and everything else.
            </div>
          )}
        </header>

        {isHome && (
          <div style={{ width: '175px', height: '175px' }} className="flex-shrink-0 hidden overflow-hidden border-4 border-gray-900 border-solid rounded-full md:block header-image">
            <Image filename="zach-and-haley.png" />
          </div>
        )}

        {/* <div className="absolute right-0 flex items-center mr-4 space-x-5">
          <Link to={CONFIG.social.instagram} className="flex items-center hover:text-green-500" target="_blank">
            <FontAwesomeIcon icon={['fab', 'instagram']} className="text-28" />
          </Link>
          <Link to={CONFIG.social.github} className="flex items-center hover:text-green-500" target="_blank">
            <FontAwesomeIcon icon={['fab', 'github']} className="text-28" />
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
