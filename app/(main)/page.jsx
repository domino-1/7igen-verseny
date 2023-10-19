import styles from "./home.module.css";
import Image from "next/image";
import headerPic from "../../public/7igenHeader_highlights.png";
import Link from "next/link";
import MainPageEvents from "../../components/custom/main-page-events";
import appleImage from '../../public/apple.png';
import droidImage from '../../public/android.png';
import huaweiImage from '../../public/huawei.png';
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
        <Link href="/regisztralj/" className={styles.midButton}>
          <div className={styles.hexButton}>
            Szavazz az
            Alternatív Népszavazáson!
          </div>
          <div className={styles.backHex}></div>
        </Link>
        <Link href="/kampanyrol/">
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
            <p>
              Töltsd le az ELEVE applikációt, és szavazz online! <br />
              <div className="store-links flex-mobile-wrap">
              <Link href="https://apps.apple.com/us/app/eleve/id1539390605" target="_blank" id="appStore" rel="noopener">
              <Image style={{height: 40 + 'px', width: 40 + 'px'}} src={appleImage} />
              <span style={{display: 'block'}}>Almás készülékem van, irány az App Store!</span>
              </Link>
              <Link href="https://play.google.com/store/apps/details?id=hu.ahang.eleve&pli=1" target="_blank" id="playStore" rel="noopener">
              <Image style={{height: 40 + 'px', width: 40 + 'px'}} src={droidImage} />
              <span style={{display: 'block'}}>Androidos készülékem van, irány a Play Áruház!</span>
              </Link>
              <Link href="https://consumer.huawei.com/hu/mobileservices/appgallery/" target="_blank" id="huaweiStore" rel="noopener">
              <Image style={{height: 40 + 'px', width: 40 + 'px'}} src={huaweiImage} />
              <span style={{display: 'block'}}>Újabb Huawei készülékem van, irány az AppGallery!</span>
              </Link>
              </div>
            </p>
            <h3 style={{marginTop: 2 + 'em'}}>Szavazz weboldalról!</h3>
            <p>(Ügyfélkapus azonosítás szükséges!)</p>
            <p>
              Számítógépről is szavazhatsz az ügyfélkapus azonosítód segítségével: <br />
              <Link href="#">Gépről szavazok!</Link>
            </p>
            <h3 style={{marginTop: 2 + 'em'}}>Szavazz személyesen!</h3>
            <p>(Fényképes igazolvány és lakcímkártya szükséges!)</p>
            <p>
              Személyesen pedig az ország számos pontján leadhatod szavazataidat.<br />
              <Link href="#">Hol tudom leadni a szavazatomat?</Link>
            </p>
          </section>
          <MainPageEvents />
        {/*/div>
      </div>*/}
    </>
  );
}
