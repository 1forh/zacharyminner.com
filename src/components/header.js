import React from 'react';
import { Link } from 'gatsby';
// import Image from './image';

const Header = () => {
  return (
    <div className="py-3">
      <div className="container flex justify-center">
        <Link to="/" className="pb-1 font-bold border-green-500 border-b-3 text-24 hover:text-green-700 hover:border-green-700">
          <strong>Zach</strong> Minner
        </Link>

        {/* <Link to="https://www.instagram.com/zminner" className="">
          <Image filename="instagram.svg" alt="Instagram link" />
        </Link> */}
      </div>
    </div>
  );
};

export default Header;
