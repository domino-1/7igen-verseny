import styles from "./home.module.css";
import Image from "next/image";
import headerPic from "../../public/7igenHeader_highlights.png";
import Link from "next/link";
import MainPageEvents from "../../components/custom/main-page-events";

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
        <Link href="/nepszavazasrol/">
          <div className={styles.mainButton}>A Népszavazásról</div>
        </Link>
        <Link href="/regisztralj/" className={styles.midButton}>
          <div className={styles.hexButton}>
            Regisztrálj
            <br />
            szavazni!
          </div>
          <div className={styles.backHex}></div>
        </Link>
        <Link href="/kampanyrol/">
          <div className={styles.mainButton}>A Kampányról</div>
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
            <h3>Szavazz online!</h3>
            <p>
              Töltsd le az ELEVE applikációt, és szavazz online az ügyfélkapus azonosítód segítségével! <br />
              Töltsd le ELEVE applikációt!
            </p>
            <h3>Szavazz weboldalról!</h3>
            <p>
              Számítógépről is szavazhatsz az ügyfélkapus azonosítód segítségével: <br />
              <Link href="#">Gépről szavazok!</Link>
            </p>
            <h3>Szavazz személyesen!</h3>
            <p>
              Személyesen pedig az ország számos pontján leadhatod szavazataidat.
            </p>
          </section>
          <MainPageEvents />
        {/*/div>
      </div>*/}
    </>
  );
}
