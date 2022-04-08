import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from '../components/MyNavbar';

function MyApp({ Component, pageProps }) {
  
  return (
    <>
      <MyNavbar/>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
