import styles from "./App.module.css";
import NavBar from "./components/Nav/NavBar";
import FullWidthSection from "./components/FullWidthSection";
import CentralSection from "./components/CentralSection";
import BlackFade from "./components/BlackFade";
import CentralTile from "./components/CentralTile";
import tileStyles from "./components/CentralTile.module.css";
import greenerHomesPath from "./images/GH-journey-map.jpeg";
import netMeteringGraphic from "./images/netmetering_graphic.jpg";
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
        <CentralTile>
          <div className={tileStyles.centralTileHeader}>Solar Incentives</div>
          <div className={tileStyles.centralTileIncentive}>
            $5,000 Greener Homes Grant
          </div>
          <div className={tileStyles.centralTileText}>
            The Canada greener homes grant provides Canadians with $1 per kW of
            Solar installed, up to a maximum of $5,000. To be eligible for the
            grant, you must own your home, and it must be your primary
            residence.
          </div>
          <div className={tileStyles.centralTileIncentive}>
            $40,000 Interest-Free Greener Homes Loan
          </div>
          <div className={tileStyles.centralTileText}>
            In addition to the grant, the Greener Homes Program and the CMHC are
            offering loans of up to $40,000 for energy efficient Home retrofits
            <br />
            <br />
            To be eligible for the Grant or the loan, homes must receive an
            energy efficiency inspection from an EnerGuide accredited company
            before any retrofits begin - We can help you get in touch with an
            EnerGuide certified inspector! See the Greener Homes Program roadmap
            for homeowners below: <br />
            <br />
          </div>
          <img src={greenerHomesPath} alt="greener homes path graphic" />
          <br />
          <br />
          <div>
            Click{" "}
            <a href="https://www.nrcan.gc.ca/energy-efficiency/homes/canada-greener-homes-grant/23441">
              HERE
            </a>{" "}
            for more information about the Greener Homes Program
          </div>
        </CentralTile>
        <CentralTile>
          <div className={tileStyles.centralTileHeader}>BC Net Metering</div>
          <div className={tileStyles.centralTileText}>
            Through BC Hydro's Net Metering program, you can use the energy you
            produce with solar to reduce your energy bill! For every kWh of
            energy you produce with solar, you receive a bill credit that you
            can use against your actual energy consumption at the end of each
            month. If you produced more from solar than you used that month, the
            consumption portion of your bill will be zero, and the extra credits
            will carry over to the next billing cycle.
            <br /> <br />
            Accumulated credits carry over month to month until you hit you
            anniversary date (typically March), when any unused credits are
            lost. When designing you solar system, we aim for a "100% offset" -
            making sure you maximise your solar array while ensuring when you
            don't end the year with unused credits.
          </div>
          <img src={netMeteringGraphic} alt="Net Metering Graphic" />
          <div>
            Click{" "}
            <a href="https://app.bchydro.com/accounts-billing/electrical-connections/net-metering.html">
              HERE
            </a>{" "}
            for more information about Net Metering.
          </div>
        </CentralTile>
      </CentralSection>
    </div>
  );
}

export default App;
