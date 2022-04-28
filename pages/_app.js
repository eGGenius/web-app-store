import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NextUIProvider } from '@nextui-org/react';

import MyNavbar from '../components/MyNavbar';

function MyApp({ Component, pageProps }) {
  
  return (
    <NextUIProvider>
      <MyNavbar/>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp
