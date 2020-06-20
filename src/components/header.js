import React from 'react';
import { Link } from 'gatsby';

const Header = () => {
  return (
    <div className="py-3">
      <div className="container flex justify-center">
        <Link to="/" className="font-bold text-20 hover:text-green-700">
          Zach's Garden
        </Link>
      </div>
    </div>
  );
};

export default Header;
