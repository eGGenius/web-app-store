import React from 'react';

import { UserContext } from '../lib/context';
import { useUserData } from '../lib/hooks';

import Head from 'next/head';
import MenuBar from '../components/MenuBar';

import "primereact/resources/themes/vela-blue/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import "primeflex/primeflex.css"

import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const userData = useUserData();
  return (
    <UserContext.Provider value={userData}>
      <Head>
        <link rel="shortcut icon" href="/logo.png" />
        <title>WebApp-Store</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="run your WebApps with ease" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <MenuBar />
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}

export default MyApp
