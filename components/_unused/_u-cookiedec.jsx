'use client'
import Script from 'next/script';

export default function CookieDeclaration() {
    return (
        <Script strategy="beforeInteractive" id="CookieDeclaration" src="https://consent.cookiebot.com/120f133b-ab95-4207-ae7b-77f00844e91d/cd.js" type="text/javascript" async />
    )
}