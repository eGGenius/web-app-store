import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toaster } from 'react-hot-toast';

import MyNavbar from '../components/MyNavbar';

function MyApp({ Component, pageProps }) {
  
  return (
    <>
      <MyNavbar/>
      <Component {...pageProps} />
      <Toaster/>
    </>
  );
}

export default MyApp
