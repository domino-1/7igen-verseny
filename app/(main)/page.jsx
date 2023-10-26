import styles from "./home.module.css";
import Image from "next/image";
import headerPic from "../../public/7igenHeader_highlights.png";
import Link from "next/link";
//import MainPageEvents from "../../components/custom/main-page-events";
//import appleImage from '../../public/Download_on_the_App_Store_Badge_HU_RGB_blk_100317.png';
//import droidImage from '../../public/google-play-badge.png';
//import huaweiImage from '../../public/huawei.png';
import { hu } from "date-fns/locale";

export default function Home() {
  return (
    <>
      <div className={`${styles.headerContainer} full`}>
        <Image
          src={headerPic}
          alt="Header image"
          fill={true}
          className={styles.headerImage}
        />
      </div>

      <div className={`${styles.mainButtonRow} full`}>
        <Link href="/csapatok/fecske">
          <div className={styles.mainButton}><u>F</u>ecske Csapat</div>
        </Link>
        <Link href="/challengek/" className={styles.midButton}>
          <div className={styles.hexButton}>
            <span style={{paddingBottom: '1rem'}}>Challengek!</span>
            <span style={{fontWeight: 'normal', fontSize: '14px', paddingBottom: '.5em'}}>Oldj meg challengeket, szerezz pontokat a csapatodnak!</span>
          </div>
          <div className={styles.backHex}></div>
        </Link>
        <Link href="/csapatok/golya/">
          <div className={styles.mainButton}><u>G</u>ólya Csapat</div>
        </Link>
      </div>

      {/*<div className={`${styles.mainPageContent} full`}>
        <div className={styles.content}>*/}
          <section className={styles.textContent}>
            <h1 style={{textAlign: 'center'}}>A 7IGEN Versenyről</h1>
            <p>
              Csatlakozz egy <Link href="/csapatok/">csapathoz</Link>, oldj meg <Link href="/challengek/">challengeket</Link> és szerezz <Link href="/pontok/">pontokat</Link>! A challengeket egyedül és többen együtt is meg tudjátok
              oldani. A versenyt az Egységes Diákfront szervezi a <Link href="https://7igen.hu">7IGEN-es alternatív népszavazás</Link> alkalmából, de bárki csatlakozhat, nem kell hozzá EDF tagnak
              lenned!
            </p>
            <p>
              A verseny többnyire online fut és október 30-ig tart. Mindenki a közösen gyűjt pontokat a saját csapatának, a két csapat
              egymással versenyzik. Az alternatív népszavazás végén lesz kikiálltva a győztes csapat. Pontokat <Link href="/challengek/">Challengek</Link> megoldásával 
              tudsz szerezni, ezek az egyszerűbbektől a bonyolultabbakon keresztül a viccesekig terjednek. A challengeket online, általában Google Form-ok 
              segítségvel tudod beküldeni. Vicces válaszokért is járhat külön pontozás! Lehetnek olyan feladtok, amik igényelnek valamennyi koordinációt csapattagok között,
              ezekért viszont több pont is jár. Vannak olyan feladatok, amik csak a 28i hétvégén nyílnak meg.
            </p>
            <p>
              A szavazás utolsó napján, október 30-a hétfőn minden challengért tripla pont jár a "Szavazz!"-kivételével!
            </p>
          </section>
          {/*<MainPageEvents />*/}
        {/*/div>
      </div>*/}
    </>
  );
}
