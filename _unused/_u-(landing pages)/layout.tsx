import styles from "./styles.module.css";
import "./landing-page.css";
import TopBarMinimal from "../../components/custom/topbar-minimal";

export default function LandingPageLayout({ children }) {
  return (
    <>
      <TopBarMinimal />
      <main className="bodyContent" style={{ minHeight: 100 + "vh" }}>
        {children}
      </main>
    </>
  );
}
