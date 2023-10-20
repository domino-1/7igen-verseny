import Link from 'next/link';

//FontAwesome
import { config as faConfig } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
faConfig.autoAddCss = false
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons'
import { faSquare } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image';
import ahangLogo from '../../public/ahang_logo.png';
import edfLogo from '../../public/edf_logo.png';
import eleveLogo from '../../public/eleve_logo.png';

export default function Footer() {
    return (
        <footer>
            <link rel="stylesheet" href="https://ahangcdn.s3-eu-central-1.amazonaws.com/hetigen.css"></link>
            <div id="projekt-infok">
                <h2>7IGEN Oktatási&nbsp;Népszavazás</h2>
                <div style={{display: "flex", gap: "10px"}}>
                    <Link href="https://facebook.com/egysegesdiakfront" target="_blank"><Image src={edfLogo} alt="Egyseges Diakfront Logo" /></Link> 
                    <Link href="https://ahang.hu" target="_blank"><Image src={ahangLogo} alt="aHang Logo" /></Link>
                    <Link href="https://eleve.hu" target="_blank"><Image src={eleveLogo} alt="ELEVE Logo" /></Link>
                </div>
            </div>
            <div id="tamogato-szervezetek">
                <h3>Támogató szervezetek</h3>
                <div className="tamogato-logok">
                    <div><Link href="https://civilbazis.hu/" target="_blank"></Link></div>
                    <div><Link href="https://szamoljukegyutt.hu/" target="_blank"></Link></div>
                    <div><Link href="https://www.facebook.com/egyseges.szuloi.front.Szeged/" target="_blank"></Link></div>
                    <div><Link href="https://tasz.hu" target="_blank"></Link></div>
                    <div><Link href="https://www.facebook.com/padtarsak/" target="_blank"></Link></div>
                    <div><Link href="https://szinvavarosaert.hu/" target="_blank"></Link></div>
                    <div><Link href="https://oktatoihalozat.hu/" target="_blank"></Link></div>
                    <div><Link href="https://facebook.com/orszagoskozosakarat" target="_blank"></Link></div>
                    <div><Link href="https://adommozgalom.hu/" target="_blank"></Link></div>
                    <div><Link href="http://www.pdsz.hu/" target="_blank"></Link></div>
                    <div><Link href="https://szuloihang.hu/" target="_blank"></Link></div>
                    <div><Link href="https://www.facebook.com/DialogusAzOktatasert/" target="_blank"></Link></div>
                    <div><Link href="https://ckpinfo.hu" target="_blank"></Link></div>
                    <div><Link href="https://hivatlanul.com/" target="_blank"></Link></div>
                    <div><Link href="https://facebook.com/pedagogusegyseg/" target="_blank"></Link></div>
                    <div><Link href="https://www.amnesty.hu/" target="_blank"></Link></div>
                    <div><Link href="https://www.cka.hu/" taget="_blank"></Link></div>
                </div>
            </div>
            <div id="footer-bottom" className="grid-centered-row">
                <div id="footer-social">
                    <Link href="https://facebook.com/7igenesnepszavazas" target="_blank"><FontAwesomeIcon icon={faFacebook} /></Link>
                    <Link href="https://www.instagram.com/explore/tags/7igen" target="_blank"><FontAwesomeIcon icon={faInstagram} /></Link>
                    <Link href="https://youtube.com/aHangvideo" target="_blank"><FontAwesomeIcon icon={faYoutube} /></Link>
                </div>
                <span id="footer-legal"><Link href="https://ahang.hu/7igen-adatvedelem/" target="_blank">Adatvédelmi nyilatkozat</Link><span> | © 2023 | </span><Link href="/sutitajekoztato">Sütitájékozató</Link></span>
                <Link href="/rolunk"><button className="hex-button" >Rólunk</button></Link>
            </div>
        </footer>
  )
}
