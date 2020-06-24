import React from 'react';

class Plant extends React.Component {
  componentDidMount() {
    window.addEventListener('scroll', () => {
      document.querySelector('.plant-stem').style.height = `${window.scrollY}px`;
    });
  }
  render() {
    return (
      <div className="fixed bottom-0 right-0 flex-col items-center hidden mr-10 -mb-10 lg:flex">
        <div className="relative w-48 h-48">
          <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute top-0 left-0 text-green-700">
            <path
              fill="currentColor"
              d="M64 96H0c0 123.7 100.3 224 224 224v144c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V320C288 196.3 187.7 96 64 96zm384-64c-84.2 0-157.4 46.5-195.7 115.2 27.7 30.2 48.2 66.9 59 107.6C424 243.1 512 147.9 512 32h-64z"
            />
          </svg>
          <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute text-green-500" style={{ top: '20px', left: '20px' }}>
            <path
              fill="currentColor"
              d="M64 96H0c0 123.7 100.3 224 224 224v144c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V320C288 196.3 187.7 96 64 96zm384-64c-84.2 0-157.4 46.5-195.7 115.2 27.7 30.2 48.2 66.9 59 107.6C424 243.1 512 147.9 512 32h-64z"
            />
          </svg>
        </div>
        <div style={{ width: '24px', marginTop: '-16px' }} className="relative plant-stem">
          <div className="absolute w-full h-full transition-all bg-green-700"></div>
          <div className="absolute w-full h-full transition-all bg-green-500" style={{ left: '11px', width: '22px' }}></div>
        </div>
      </div>
    );
  }
}

export default Plant;
