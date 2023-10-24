'use client';

import { GTM_ID, pageview } from '../../lib/_u-gtm'
import { usePathname, useSearchParams } from "next/navigation"
import Script from 'next/script';
import { useEffect } from "react";

export default function Analytics() {

    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect( () => {
        if (pathname) {
            pageview(pathname)
        }
    }, [pathname, searchParams])

    // const router = useRouter()
    // useEffect(() => {
    //     router.events.on('routeChangeComplete', pageview)
    //     return () => {
    //     router.events.off('routeChangeComplete', pageview)
    //     }
    // }, [router.events])

    return (<>
      {/* Google Tag Manager - Global base code */}
      <Script
        id="gtag-base"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${GTM_ID}');
          `,
        }}
      />
    </>);
}