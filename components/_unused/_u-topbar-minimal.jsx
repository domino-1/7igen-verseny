import Link from 'next/link';
import styles from './topbar.module.css';
import HamburgerMenu from './hamburger-menu';
import Image from 'next/image';
import logoPic from '../../public/15-removebg-preview.png';

export default function TopBarMinimal() {
    return (
        <div className={`${styles.topBarMinimal} ${styles.topBar}`}>
            {/*<HamburgerMenu />*/}
            <Link className={styles.logo} href="/"><Image src={logoPic} width={40} height={40} /></Link>
            <nav>
                <Link href='https://tamogass.ahang.hu/oktatas-nepszavazas?utm_source=7igen.hu' target='_blank'><button className="hex-button" >Támogatás</button></Link>
            </nav>
        </div>    
    )
}