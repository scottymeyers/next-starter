import React from 'react';

import Navigation from '../components/Navigation';

export default function App ({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
    </>
  );
};