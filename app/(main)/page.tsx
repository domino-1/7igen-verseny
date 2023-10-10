import styles from "./home.module.css";
import Image from "next/image";
import headerPic from "../../public/7igenHeader_highlights.png";
import Link from "next/link";

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

      <div className={`${styles.mainPageContent} full`}>
        <div className={styles.sidebar}>
          <h2>Közelgő kampány események</h2>
        </div>

        <div className={styles.content}>
          <h1>7IGEN ALTERNATÍV NÉPSZAVAZÁS AZ OKTATÁSRÓL</h1>
          <p>
            Az oktatás sorsa az országunk jövője! Együtt, közösen a diákokkal,
            pedagógusokkal, civilekkel és tenni akaró állampolgárokkal tovább
            visszük a remény lángját! Tarts velünk te is!
          </p>
          <p>
            Valósítsuk meg Magyarország első alternatív népszavazását!
            Csatlakozz aktivistának, regisztrálj a szavazáshoz, ismerd meg a
            kérdéseket, és támogasd a megvalósítását!
          </p>
          <h2>
            A <span className="nepszavazas">Népszavazás</span> és a{" "}
            <span className="kampany">Kampány</span>
          </h2>
          <p>
            Észrevehetteed, hogy ezen az oldalon két színt is használunk, sárgát
            és pirosat. Két fő menüpont is van, egyik a népszavazásra, másik
            pedig a kampányra mutat. Ez azért van, mert úgy gondoljuk, hogy egy
            demokratikus népszavazásnál el kell vállnia egymástól magának a
            népszavazásnak, és a kampánynak. Mivel ez egy alternatív
            népszavazás, sajnos ez nem sikerült mindehol, de ahol tudjuk, ott
            megpróbáljuk elválasztani a kettőt!
          </p>
          <p>
            Minden oldal tetején láthatsz egy színes csíkot, ennek az oldalnak
            az esetén ezen az oldalon ez piros. Ahol a csík sárga, ott az oldal
            a kampányra vonatkozik, ahol piros ott magára a népszavazásra. Ugyan
            így működnek kissebb elemek is az oldalon. Például rögtön itt a
            "Közelgő Kampány Események" dobozban a szöveg sárga, mivel ez a
            kampányra vonatkozik. A legtöbb oldalon próbáltunk csak az egyikről
            vagy a másikról beszélni, ahol meg mindkét téma jelen van egy
            oldalon, ott ezekkel a színekkel jelöltük!
          </p>
        </div>
      </div>
    </>
  );
}
