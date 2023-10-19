//import { Metadata } from "next";
import styles from './styles.module.css';
import './global.css';

// //FontAwesome
// import { config as faConfig } from '@fortawesome/fontawesome-svg-core'
// import '@fortawesome/fontawesome-svg-core/styles.css'
// faConfig.autoAddCss = false
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//Components
import Link from 'next/link';
import Footer from '../components/custom/footer';

//Fonts
import { Jost, Poppins } from 'next/font/google';

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
  openGraph: {
    title: "7IGEN",
    description: "7IGEN Oktatási Népszavazás"
  }
  
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}) {
  return (
    <html className={`${jost.variable} ${poppins.variable} ${styles.html}`} lang="en">
      <body style={{margin: 0, background: '#232323', color: 'white'}}>
        <hr className="topLine"></hr>
          {children}
        <Footer />
      </body>
    </html>
  );
}
