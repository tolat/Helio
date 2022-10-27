import styles from "./App.module.css";
import NavBar from "./components/Nav/NavBar";
import FullWidthSection from "./components/FullWidthSection";
import CentralSection from "./components/CentralSection";
import BlackFade from "./components/BlackFade";
import CentralTile from "./components/CentralTile";
import tileStyles from "./components/CentralTile.module.css";
import greenerHomesPath from "./images/GH-journey-map.jpeg";
import nabcepSeal from "./images/pv_assoc_seal.png";

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
        <img
          className={styles.bannerNabcep}
          src={nabcepSeal}
          alt="nabcep seal"
        />
      </div>
      <BlackFade>
        <FullWidthSection>
          <div className={styles.banner}></div>
        </FullWidthSection>
      </BlackFade>
      <CentralSection>
        <CentralTile style={{ width: "50%" }}>
          <div className={tileStyles.centralTileHeader}>Solar Incentives</div>
          <div className={tileStyles.centralTileIncentive}>
            $5,000 Greener Homes Grant<br></br>
            $40,000 Greener Homes Loan
          </div>
          <div className={tileStyles.centralTileText}>
            The Canada greener homes grant provides Canadians with $1 per kW of
            Solar installed, up to a maximum of $5,000. To be eligible for the
            grant, you must own your home, and it must be your primary
            residence. You can learn more about the Grant Here:
          </div>
          <img src={greenerHomesPath} alt="greener homes path graphic" />
        </CentralTile>
        <CentralTile style={{ width: "50%" }}>
          <div className={tileStyles.centralTileHeader}>BC Net Metering</div>
        </CentralTile>
      </CentralSection>
    </div>
  );
}

export default App;
