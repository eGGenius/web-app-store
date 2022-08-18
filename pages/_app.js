import React, { useState } from 'react';
import CookieConsent from "react-cookie-consent";

import Head from 'next/head';
import Script from 'next/script'
import { getCookie } from 'cookies-next';

import { UserContext } from '../lib/context';
import { useUserData } from '../lib/hooks';

import MenuBar from '../components/MenuBar';
import { ScrollTop } from 'primereact/scrolltop';

import "primereact/resources/themes/vela-blue/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import "primeflex/primeflex.css"

import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/globals.css'
import Link from 'next/link';


function MyApp({ Component, pageProps }) {
  const [consent, setConsent] = useState(getCookie('cookieConsent'));
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
      <CookieConsent location="bottom" buttonText="I accept" cookieName="cookieConsent" style={{ background: "#2B373B", paddingLeft: "1rem", paddingRight: "2rem" }} buttonStyle={{ color: "black" }} expires={150} enableDeclineButton acceptOnScroll={false} onAccept={() => {setConsent(true);}}>
        This website uses cookies to enhance the user experience.
        <span> </span>
        <Link href="/privacy-en" className="underline bold" style={{ paddingLeft: "2rem" }}>Privacy Policy</Link>
      </CookieConsent>

      {consent === true && (
        <>
          <Script src="https://www.googletagmanager.com/gtag/js?id=G-DTCFE37KP3" strategy="afterInteractive" />
          <Script id="google-analytics" strategy="afterInteractive">
            {` window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-DTCFE37KP3'); `}
          </Script>
        </>
      )}

    </UserContext.Provider>
  );
}

export default MyApp
