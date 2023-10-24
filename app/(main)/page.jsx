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
        <Link href="/nepszavazasrol/a-7-kerdes">
          <div className={styles.mainButton}>A 7 kérdés</div>
        </Link>
        <Link href="/nepszavazasrol/szavazas-az-alternativ-nepszavazason/" className={styles.midButton}>
          <div className={styles.hexButton}>
            Szavazz az
            Alternatív Népszavazáson!
          </div>
          <div className={styles.backHex}></div>
        </Link>
        <Link href="/nepszavazasrol/szavazohelyszinek/">
          <div className={styles.mainButton}>Szavazási helyszínek</div>
        </Link>
      </div>

      {/*<div className={`${styles.mainPageContent} full`}>
        <div className={styles.content}>*/}
          <section className={styles.textContent}>
            <h1>7IGEN ALTERNATÍV NÉPSZAVAZÁS AZ OKTATÁSRÓL</h1>
            <p>
              Az oktatás sorsa az országunk jövője! <br />
              Együtt, közösen a diákokkal, pedagógusokkal, civilekkel és tenni akaró állampolgárokkal továbbvisszük a remény lángját!
              Tarts velünk te is! <br />
              Vigyük sikerre Magyarország első alternatív népszavazását!
            </p>
            <p>
              Jelentkezz segítőnek, szavazz a kérdésekre, és adományozz az alternatív népszavazásra!
            </p>
            <p>
              Szavazz online vagy személyesen 7 kérdésben, ha elmúltál 16 éves és rendelkezel érvényes fényképes igazolvánnyal (személyi, útlevél, jogosítvány)!
            </p>
          </section>
          <section className={styles.textContent}>
            <h2>Hogyan tudok szavazni?</h2>
            <h3>Szavazz mobileszközön!</h3>
            <p>(Ügyfélkapus azonosítás szükséges!)</p>
            <h3 style={{marginTop: 2 + 'em'}}>Szavazz weboldalról!</h3>
            <p>(Ügyfélkapus azonosítás szükséges!)</p>
            <p>
              Számítógépről is szavazhatsz az ügyfélkapus azonosítód segítségével: <br />
              <Link href="https://eleve.hu/pc/7igen">Gépről szavazok!</Link>
            </p>
            <h3 style={{marginTop: 2 + 'em'}}>Szavazz személyesen!</h3>
            <p>(Fényképes igazolvány és lakcímkártya szükséges!)</p>
            <p>
              Személyesen pedig az ország számos pontján leadhatod szavazataidat.<br />
              <Link href="/nepszavazasrol/szavazohelyszinek/">Hol tudom leadni a szavazatomat?</Link>
            </p>
          </section>
          {/*<MainPageEvents />*/}
        {/*/div>
      </div>*/}
    </>
  );
}
