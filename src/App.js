import styles from "./App.module.css";
import NavBar from "./components/Nav/NavBar";
import FullWidthSection from "./components/FullWidthSection";
import fullWidthStyles from "./components/FullWidthSection.module.css";
import CentralSection from "./components/CentralSection";
import BlackFade from "./components/BlackFade";
import CentralTile from "./components/CentralTile";
import centralTileStyles from "./components/CentralTile.module.css";
import ProductTile from "./components/ProductTile";
import productTileStyles from "./components/ProductTile.module.css";

import greenerHomesPath from "./images/greener_homes_graphic.jpg";
import netMeteringGraphic from "./images/netmetering_graphic2.png";
import nabcepSeal from "./images/pv_assoc_seal.png";
import banner2 from "./images/solarspan1.jpg";
import banner1 from "./images/solarspan3.jpg";
import banner1_s from "./images/solarspan3_small.jpg";
import banner1_l from "./images/solarspan3_large.jpg";
import stringInvIcon from "./images/panels_string.png";
import microInvIcon from "./images/panels_micro.png";
import batteryIcon from "./images/battery.png";

import React, { useState } from "react";
import { useWindowSize } from "usehooks-ts";

function App() {
  const wSmall = 1100;
  const wLarge = 1600;
  const { width } = useWindowSize();

  // Stately variables
  const [banner1Background, setBanner1Background] = useState(banner1);
  const [productTilesDynaStyling, setProductTilesDynaStyling] = useState([]);

  // Function to use stately variables to update things that have changes based on
  // small medium and alrge window sizes
  const toggleSmallMedLarge = (sml, med, lrg, fn) => {
    width < wSmall ? fn(sml) : width > wLarge ? fn(lrg) : fn(med);
  };

  // Handles resize for the app
  const handleResize = (e) => {
    toggleSmallMedLarge(banner1_s, banner1, banner1_l, setBanner1Background);
  };
  window.addEventListener("resize", handleResize);

  return (
    <div className={styles.App}>
      <NavBar />
      <div className={styles.navbarSpacer}></div>
      <FullWidthSection>
        <BlackFade backgroundImage={banner1Background} backgroundOpacity="0.7">
          <div className={styles.bannerContainer}>
            <div className={styles.bannerText}>
              Residential solar installation<br></br>
              Pre-wiring and consultation<br></br>
              Off-grid and grid-tied projects<br></br>
            </div>
            <img
              className={styles.bannerNabcep}
              src={nabcepSeal}
              alt="nabcep seal"
            />
          </div>
        </BlackFade>
      </FullWidthSection>
      <CentralSection>
        <CentralTile>
          <div className={centralTileStyles.centralTileHeader}>
            Solar <b>Incentives</b>
          </div>
          <div className={centralTileStyles.centralTileIncentive}>
            $5,000 Greener Homes Grant
          </div>
          <div className={centralTileStyles.centralTileText}>
            The Canada greener homes grant provides Canadians with $1 per kW of
            Solar installed, up to a maximum of $5,000. To receive the grant you
            must own your home, and it must be your primary residence.
          </div>
          <div className={centralTileStyles.centralTileIncentive}>
            $40,000 Interest-Free Greener Homes Loan
          </div>
          <div className={centralTileStyles.centralTileText}>
            In addition to the grant, the Greener Homes Program and the CMHC are
            offering loans of up to $40,000 for energy efficient Home retrofits
            <br />
            <br />
            To be eligible for the grant or the loan, homes must receive an
            energy efficiency inspection from an EnerGuide accredited company
            before any retrofits begin - We can help you get in touch with an
            EnerGuide certified inspector!
            <br />
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
          <div className={centralTileStyles.centralTileHeader}>
            BC <b>Net Metering</b>
          </div>
          <div className={centralTileStyles.centralTileText}>
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
            making sure you maximise your solar array while ensuring you don't
            end the year with unused credits.
          </div>
          <img
            style={{ margin: "1.5rem 0 1.5rem 0" }}
            src={netMeteringGraphic}
            alt="Net Metering Graphic"
          />
          <div style={{ justifySelf: "stretch" }}>
            Click{" "}
            <a href="https://app.bchydro.com/accounts-billing/electrical-connections/net-metering.html">
              HERE
            </a>{" "}
            for more information about Net Metering.
          </div>
        </CentralTile>
      </CentralSection>
      <BlackFade backgroundImage={banner2} backgroundOpacity="0.65">
        <FullWidthSection>
          <div style={{ maxWidth: "80rem" }}>
            <div
              className={fullWidthStyles.header}
              style={{ color: "white", fontSize: "2.5rem" }}>
              Solar <b>Solutions</b>{" "}
            </div>
            <div
              className={fullWidthStyles.text}
              style={{ color: "white", fontSize: "1.5rem", paddingTop: "0" }}>
              We offer a complete suite of solar solutions for grid-tied and
              off-grid solar projects. Finding a line of solar products that
              fits your project and budget is important - our variety of product
              tiers aims to cover all your home energy needs!
            </div>
          </div>
          <div
            className={productTileStyles.tileGridContainer}
            dynamicStyles={productTilesDynaStyling}
            style={{ maxWidth: "80rem" }}>
            <ProductTile
              header={"String Inverters"}
              img={stringInvIcon}
              text={
                "String inverters combine and invert all the DC energy produced by a solar array in one unit. Although this is the older inverter technology, it has good reliability, great product support, and excellent serviceability, and comes with the most attractive pricetag."
              }
            />
            <ProductTile
              header={"Microinverters"}
              img={microInvIcon}
              text={
                "Miroinverters invert energy from DC to AC for each panel individually. This is the industry standard for the best inverter technology, providing excellent solar yield and shading compensation. Due to multiple points of faliure, microinverters drastically lessen array downtime in case of malfunction."
              }
            />
            <ProductTile
              header={"Energy Storage"}
              img={batteryIcon}
              text={
                "Tired of losing power during outages? A battery backup can help you have continuous power for some or all of your home loads when the grid is down. Storage options are available for grid tied and off grid, and come in Flooded Lead-Acid, Absorbed Glass Mat and Lithium options."
              }
            />
          </div>
        </FullWidthSection>
      </BlackFade>
    </div>
  );
}

export default App;
