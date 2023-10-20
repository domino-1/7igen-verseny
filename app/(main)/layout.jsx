import TopBar from '../../components/custom/topbar';
import Link from 'next/link';

export default function MainLayout({ children }) {
    return (<>
        <TopBar />
        <main className="bodyContent" style={{minHeight: 100 + 'vh'}}>{children}</main>
        <div style={{position: 'fixed',width: 100+'vw',bottom: 0,display: 'flex',justifyContent: 'center',zIndex: 2}}><Link href="/kampanyrol/esemenyek" style={{textDecoration: 'none',filter: 'drop-shadow(0px 0px 5px black)'}}><button className="hex-button" style={{color: 'white',background: 'var(--main-red)',textDecoration: 'none',padding: '1.5em 6em',clipPath: 'polygon(15% 0,85% 0,100% 100%,0% 100%)'}}>Szavazz weben!</button></Link></div>
    </>)
}