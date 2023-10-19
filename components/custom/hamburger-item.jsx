'use client'
import "./hamburger-menu.css";
import Link from 'next/link';
import ParsedHtml from "./parsed-html";

export default function HamburgerItem({ target, text, description, className }) {
    return (<>
        <Link id={"menu-" + target.toLowerCase().replaceAll(' ', '-').slice(target.lastIndexOf('/') + 1)} className={className} key={target + "-" + text} href={target}>
            {text}
            { description !== undefined ? <div><ParsedHtml htmlString={description + ""} /></div> : <></> }
        </Link>
    </>);
}