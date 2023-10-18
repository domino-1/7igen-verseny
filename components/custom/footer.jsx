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

export default function Footer() {
    return (
        <footer>
            <div id="projekt-infok">
                <h2>7IGEN Oktatási&nbsp;Népszavazás</h2>
                <div><Link href="https://facebook.com/egysegesdiakfront"><Image src={edfLogo} alt="Egyseges Diakfront Logo" /></Link> <Link href="https://ahang.hu"><Image src={ahangLogo} alt="aHang Logo" /></Link></div>
            </div>
            <div id="tamogato-szervezetek">
                <h3>Támogató szervezetek</h3>
                <div className="tamogato-logok">
                    <FontAwesomeIcon icon={faSquare} size="2x" />
                    <FontAwesomeIcon icon={faSquare} size="2x" />
                    <FontAwesomeIcon icon={faSquare} size="2x" />
                    <FontAwesomeIcon icon={faSquare} size="2x" />
                    <FontAwesomeIcon icon={faSquare} size="2x" />
                    <FontAwesomeIcon icon={faSquare} size="2x" />
                    <FontAwesomeIcon icon={faSquare} size="2x" />
                    <FontAwesomeIcon icon={faSquare} size="2x" />
                    <FontAwesomeIcon icon={faSquare} size="2x" />
                    <FontAwesomeIcon icon={faSquare} size="2x" />
                </div>
            </div>
            <div id="footer-bottom" className="grid-centered-row">
                <div id="footer-social">
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faInstagram} />
                    <FontAwesomeIcon icon={faYoutube} />
                    <FontAwesomeIcon icon={faTiktok} />
                </div>
                <span id="footer-legal"><Link href="https://ahang.hu/7igen-adatvedelem/">Adatvédelmi nyilatkozat</Link><span> | © 2023 ⧼szervező⧽ | </span><Link href="#">Sütitájékozató</Link></span>
                <Link href="/rolunk"><button className="hex-button" >Rólunk</button></Link>
            </div>
        </footer>
        <link rel="stylesheet" href="https://ahangcdn.s3-eu-central-1.amazonaws.com/hetigen.css">
  )
}
