import React from 'react';

import Head from 'next/head';
import MenuBar from '../components/MenuBar';

import "primereact/resources/themes/vela-blue/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import "primeflex/primeflex.css"
 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toaster } from 'react-hot-toast';

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>WebApp-Store</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="run your WebApps with ease" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <MenuBar/>
      <Component {...pageProps} />
      <Toaster />
    </>
  );
}

export default MyApp
