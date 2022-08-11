import React from 'react';

import { UserContext } from '../lib/context';
import { useUserData } from '../lib/hooks';

import Head from 'next/head';
import MenuBar from '../components/MenuBar';
import { ScrollTop } from 'primereact/scrolltop';

import "primereact/resources/themes/vela-blue/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import "primeflex/primeflex.css"

import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/globals.css'

import Script from 'next/script'

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
      <ScrollTop threshold={200} behavior="smooth" />
      <Script src="https://www.googletagmanager.com/gtag/js?id=UA-212764482-1" strategy="afterInteractive"/>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-212764482-1');
        `}
      </Script>
    </UserContext.Provider>
  );
}

export default MyApp
