import styles from "./home.module.css";
import Image from "next/image";
import headerPic from "../../public/7igenHeader.png";
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
        <Link href="/hirek/">
          <div className={styles.mainButton}>Hírek</div>
        </Link>
        <Link href="/regisztralj/" className={styles.midButton}>
          <div className={styles.hexButton}>
            Regisztrálj
            <br />
            szavazni!
          </div>
          <div className={styles.backHex}></div>
        </Link>
        <Link href="/nepszavazasrol/">
          <div className={styles.mainButton}>A Népszavazásról</div>
        </Link>
      </div>

      <div className={`${styles.mainPageContent} full`}>
        <div className={styles.sidebar}>
          <h2>Közelgő események</h2>
        </div>

        <div className={styles.content}>
          <h1>Címsor</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </>
  );
}
