import React from 'react';
import Seo from '../components/seo';
import Layout from '../components/layout/layout';
import Image from '../components/image';

const AboutPage = ({ data, location }) => {
  return (
    <Layout>
      <Seo title="About me" />
      <div className="container pb-10">
        <div className="leading-normal text-18">
          I'm a web developer building websites and applications at{' '}
          <a href="https://www.skycatchfire.com/" target="_blank" rel="noreferrer" className="font-bold">
            SKYCATCHFIRE
          </a>
          . I live in North Canton with my beautiful girlfriend Haley and my asshole cat Ava and my tiny kitten Lily. I'm a Zach of all trades and I'm always trying to learn more about myself and
          everything else.
        </div>
        <div style={{ width: '175px', height: '175px' }} className="flex-shrink-0 hidden overflow-hidden border-4 border-gray-900 border-solid rounded-full md:block header-image">
          <Image filename="zach-and-haley.png" />
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
