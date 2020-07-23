import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Back = () => {
  return (
    <Link to="/" className="inline-flex items-center mb-10 hover:text-green-500">
      <FontAwesomeIcon icon={['fas', 'chevron-left']} className="mr-3 text-18" />
      <span className="font-medium text-18">Go Back</span>
    </Link>
  );
};

export default Back;
