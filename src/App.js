import styles from "./App.module.css";
import NavBar from "./components/Nav/NavBar";
import FullWidthSection from "./components/FullWidthSection";
import CentralSection from "./components/CentralSection";
import BlackFade from "./components/BlackFade";
import CentralTile from "./components/CentralTile";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <div className={styles.navbarSpacer}></div>
      <div className={styles.bannerContainer}>
        <div className={styles.bannerText}>
          Residential solar installation<br></br>
          Pre-wiring and consultation <br></br>
          Off-grid and grid-tied applications <br></br>
        </div>
        <div className={styles.bannerNabcep}></div>
      </div>
      <BlackFade>
        <FullWidthSection>
          <div className={styles.banner}></div>
        </FullWidthSection>
      </BlackFade>
      <CentralSection>
        <CentralTile style={{ width: "50%" }}>
          <div className={styles.sectionHeader}>Solar Incentives</div>
          <div className={styles.incentiveAmount}>$5,000</div>
        </CentralTile>
        <CentralTile style={{ width: "50%" }}>
          <div className={styles.sectionHeader}>BC Net Metering</div>
        </CentralTile>
      </CentralSection>
    </div>
  );
}

export default App;
