/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';

class Plant extends React.Component {
  componentDidMount() {
    window.addEventListener('scroll', () => {
      document.querySelector('.plant-stem').style.height = `${window.scrollY}px`;
    });
  }
  render() {
    return (
      <div className="fixed bottom-0 right-0 flex-col items-center hidden mr-10 -mb-10 text-green-700 lg:flex">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="seedling" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-48">
          <path
            fill="currentColor"
            d="M64 96H0c0 123.7 100.3 224 224 224v144c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V320C288 196.3 187.7 96 64 96zm384-64c-84.2 0-157.4 46.5-195.7 115.2 27.7 30.2 48.2 66.9 59 107.6C424 243.1 512 147.9 512 32h-64z"
          />
        </svg>
        <div className="transition-all bg-green-700 plant-stem" style={{ width: '24px', marginTop: '-16px' }}></div>
      </div>
    );
  }
}

export default Plant;
