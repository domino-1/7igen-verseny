//import { Metadata } from "next";
import styles from './styles.module.css';
import './global.css';

//GTM
// import { GTM_ID } from '../lib/gtm'
// import { useRouter } from 'next/router';

// //FontAwesome
// import { config as faConfig } from '@fortawesome/fontawesome-svg-core'
// import '@fortawesome/fontawesome-svg-core/styles.css'
// faConfig.autoAddCss = false
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//Components
import Link from 'next/link';
import Footer from '../components/custom/footer';
import { Suspense } from 'react';
import Analytics from '../components/custom/analytics.jsx';
import CookieDeclaration from '../components/custom/cookiedec';

//Fonts
import { Jost, Poppins } from 'next/font/google';
import Script from 'next/script';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-poppins',
  subsets: ['latin-ext'],
  preload: false,
})

const jost = Jost({
  variable: '--font-jost',
  display: 'swap',
  subsets: ['latin-ext'],
})

export const metadata = {
  title: "7IGEN",
  description: "7IGEN Oktatási Népszavazás",
  metadataBase: 'https://7igen.hu',
  openGraph: {
    title: "7IGEN",
    description: "7IGEN Oktatási Népszavazás"
  }
  
};

import { GTM_ID } from '../lib/gtm';

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}) {

  // const router = useRouter()
  // useEffect(() => {
  //   router.events.on('routeChangeComplete', pageview)
  //   return () => {
  //     router.events.off('routeChangeComplete', pageview)
  //   }
  // }, [router.events])


  return (
    <html className={`${jost.variable} ${poppins.variable} ${styles.html}`} lang="en">
      <head>
        <script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="120f133b-ab95-4207-ae7b-77f00844e91d" data-blockingmode="auto" type="text/javascript" />
      </head>

      <Suspense><Analytics /></Suspense>
      
      {/* Google Tag Manager */}
      {/*<Script id="google-tag-manager" strategy="afterInteractive">{`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        '[https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f)](https://www.googletagmanager.com/gtm.js?id=%27+i+dl;f.parentNode.insertBefore(j,f));
        })(window,document,'script','dataLayer','GTM-MRKMZB4');  
      `}</Script>}
      {/* End Google Tag Manager */}
      {/*<head>
      <Script strategy="afterInteractive" id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="120f133b-ab95-4207-ae7b-77f00844e91d" data-blockingmode="auto" type="text/javascript"></Script>
      </head>*/}
      <body style={{margin: 0, background: '#232323', color: 'white'}}>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <hr className="topLine"></hr>
          {/*<Script strategy="afterInteractive" id="CookieDeclaration" src="https://consent.cookiebot.com/120f133b-ab95-4207-ae7b-77f00844e91d/cd.js" type="text/javascript" async></Script>*/}
          <Suspense><CookieDeclaration /></Suspense>
          {children}
        <Footer />
      </body>
    </html>
  );
}
