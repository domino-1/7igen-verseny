import TopBar from '../../components/custom/topbar';
import Link from 'next/link';

export default function MainLayout({ children }) {
    return (<>
        <TopBar />
        <main className="bodyContent" style={{minHeight: 100 + 'vh'}}>{children}</main>
        <div id="mobile-vote" className="mobile-only" style={{position: 'fixed',width: 100+'vw',bottom: 0,display: 'flex',justifyContent: 'center',zIndex: 2}}><Link href="https://www.7igen.hu/nepszavazasrol/szavazas-az-alternativ-nepszavazason#mobile-szavazas" target="_blank" style={{textDecoration: 'none',filter: 'drop-shadow(0px 0px 5px black)'}}><button className="hex-button" style={{color: 'white',background: 'var(--main-red)',textDecoration: 'none',padding: '1.5em 6em',clipPath: 'polygon(15% 0,85% 0,100% 100%,0% 100%)'}}>Szavazz applikációból!</button></Link></div>
        <div id="web-vote" className="desktop-only" style={{position: 'fixed',width: 100+'vw',bottom: 0,display: 'flex',justifyContent: 'center',zIndex: 2}}><Link href="https://www.7igen.hu/nepszavazasrol/szavazas-az-alternativ-nepszavazason#mobile-szavazas" target="_blank" style={{textDecoration: 'none',filter: 'drop-shadow(0px 0px 5px black)'}}><button className="hex-button" style={{color: 'white',background: 'var(--main-red)',textDecoration: 'none',padding: '1.5em 6em',clipPath: 'polygon(15% 0,85% 0,100% 100%,0% 100%)'}}>Szavazz a mobil appon!</button></Link></div>
    </>)
}