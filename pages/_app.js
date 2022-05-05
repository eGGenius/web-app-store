import React from 'react';

import "primereact/resources/themes/vela-blue/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import "primeflex/primeflex.css"
 
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
