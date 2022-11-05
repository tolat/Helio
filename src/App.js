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
import ProductCarousel from "./components/ProductCarousel";
import QnaCard from "./components/QnaCard";
import Footer from "./components/Footer";

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
import bluetoblackIcon from "./images/bluetoblack.png";
import netMeteringGraphicVertical from "./images/netmetering_graphic_vertical.jpg";

import React, { useState } from "react";
import { useWindowSize } from "usehooks-ts";

function App() {
  const wSmall = 1100;
  const wLarge = 1600;
  const { width } = useWindowSize();

  // Stately styling variables
  const [banner1Background, setBanner1Background] = useState(banner1);
  const [PTDisplay, setPTDisplay] = useState("flex");
  const [PTJustify, setPTJustify] = useState("");
  const [CS1FlexDirection, setCS1FlexDirection] = useState("row");
  const [CS1TileWidth, setCS1TileWidth] = useState("50%");
  const [PTWidth, setPTWidth] = useState("20%");
  const [QnaTemplateColumns, setQnaTemplateColumns] = useState("50% 50%");
  const [NMgraphic, setNMgraphic] = useState(netMeteringGraphic);
  const [footerFlexDirection, setFooterFlexDirection] = useState("row");
  const [footerTextMaxWidth, setFooterTextMaxWidth] = useState("32rem");

  // Function to use stately variables to update things that have changes based onsmall medium and alrge window sizes
  const toggleSmallMedLarge = (sml, med, lrg, fn) => {
    width < wSmall ? fn(sml) : width > wLarge ? fn(lrg) : fn(med);
  };

  // Handles resize for the app
  let resizeUpdateScheduled = false;
  const handleResize = (e) => {
    if (!resizeUpdateScheduled) {
      resizeUpdateScheduled = true;
      setTimeout(() => {
        toggleSmallMedLarge(
          banner1_s,
          banner1,
          banner1_l,
          setBanner1Background
        );
        toggleSmallMedLarge("grid", "flex", "flex", setPTDisplay);
        toggleSmallMedLarge("center", "", "", setPTJustify);
        toggleSmallMedLarge("80%", "20%", "20%", setPTWidth);
        toggleSmallMedLarge("column", "row", "row", setCS1FlexDirection);
        toggleSmallMedLarge("100%", "50%", "50%", setCS1TileWidth);
        toggleSmallMedLarge(
          "100%",
          "50% 50%",
          "50% 50%",
          setQnaTemplateColumns
        );
        toggleSmallMedLarge(
          netMeteringGraphicVertical,
          netMeteringGraphic,
          netMeteringGraphic,
          setNMgraphic
        );
        toggleSmallMedLarge("column", "row", "row", setFooterFlexDirection);
        toggleSmallMedLarge("", "32rem", "32rem", setFooterTextMaxWidth);
        resizeUpdateScheduled = false;
      }, 50);
    }
  };

  window.addEventListener("resize", handleResize);

  // App onload function
  const onLoad = (e) => {
    handleResize(e);
  };

  return (
    <div className={styles.App} onLoad={onLoad}>
      <NavBar />
      <FullWidthSection style={{ marginTop: "var(--navBarHeight)" }}>
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
      <CentralSection style={{ flexDirection: CS1FlexDirection }}>
        <CentralTile style={{ width: CS1TileWidth }}>
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
        <CentralTile style={{ width: CS1TileWidth }}>
          <div className={centralTileStyles.centralTileHeader}>
            BC <b>Net Metering</b>
          </div>
          <div className={centralTileStyles.centralTileText}>
            Through BC Hydro's Net Metering program, you can use the energy you
            produce with solar to reduce your energy bill! For every kWh of
            energy you produce with solar, you receive a bill credit that you
            can use against your actual energy consumption at month's end. If
            you produced more energy from solar than you used, the consumption
            portion of your bill will be zero, and the extra credits will carry
            over to the next billing cycle.
            <br /> <br />
            Accumulated credits carry over month to month until you hit you
            anniversary date (typically March), when any unused credits arelost.
            When designing you solar system, we aim for a "100% offset" - making
            sure you maximise your solar array while ensuring you don't end the
            year with unused credits.
          </div>
          <img
            style={{ margin: "1.5rem 0 1.5rem 0" }}
            src={NMgraphic}
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
          <div style={{ maxWidth: "90rem" }}>
            <div
              className={fullWidthStyles.header}
              style={{ color: "white", fontSize: "2.5rem" }}>
              Solar <b>Solutions</b>{" "}
            </div>
            <div
              className={fullWidthStyles.text}
              style={{ color: "white", fontSize: "1.5rem", paddingTop: "0" }}>
              Finding a line of solar equipment that fits your vision and budget
              is important - We offer a complete suite of solar solutions for
              grid-tied and off-grid solar projects that aims to cover all your
              home energy needs!
            </div>
          </div>
          <div
            className={productTileStyles.tileGridContainer}
            style={{
              display: PTDisplay,
              justifyItems: PTJustify,
              maxWidth: "90rem",
            }}>
            <ProductTile
              style={{ width: PTWidth }}
              header={"String Inverters"}
              img={stringInvIcon}
              text={
                "String inverters convert all your DC solar energy to AC in one unit. With the most attractive pricetag, they are ideal for minimizing your solar Payback Period."
              }
            />
            <ProductTile
              style={{ width: PTWidth }}
              header={"Microinverters"}
              img={microInvIcon}
              text={
                "Miroinverters pair with individual panels to convert DC to AC right on the roof. This is the standard for the best inverter technology, with a larger Return On Investment."
              }
            />
            <ProductTile
              style={{ width: PTWidth }}
              header={"Energy Storage"}
              img={batteryIcon}
              text={
                "Tired of losing power when the grid is down? A battery backup can help you maintian continuous power for some or all of your home loads through a power outage."
              }
            />
            <ProductTile
              style={{ width: PTWidth }}
              header={"All Black Panels"}
              img={bluetoblackIcon}
              text={
                "Solar panels don't have to affect the aesthetic of your home. With all-black racking and solar panel options, saving on energy can also add a sleek look to your roof."
              }
            />
          </div>
        </FullWidthSection>
      </BlackFade>
      <CentralSection
        style={{ flexDirection: "column", borderBottom: "1px solid grey" }}>
        <div
          style={{
            width: "100%",
            textAlign: "center",
            fontSize: "2.5rem",
            marginTop: "3rem",
          }}>
          Our <b>Products</b>
        </div>
        <div style={{ margin: "4rem 0rem 5rem 0rem" }}>
          <ProductCarousel wSmall={wSmall} />
        </div>
      </CentralSection>
      <CentralSection style={{ flexDirection: "column" }}>
        <div
          style={{
            width: "100%",
            fontSize: "2rem",
            textAlign: "center",
          }}>
          FAQ
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: QnaTemplateColumns,
            justifyContent: "center",
            width: "100%",
            overflow: "scroll",
            msOverflowStyle: "none" /* for Internet Explorer, Edge */,
            scrollbarWidth: "none" /* for Firefox */,
            overflowY: "scroll",
          }}>
          <CentralTile>
            <QnaCard
              question="Is it sunny enough in Vancouver and BC generally for solar to be worth it?"
              answer="Yes! It is a common misconception that British Columbia is too rainy or overcast for solar, specificallt Vancouver and Victoria. In fact, BC receives the same amount of energy from the sun as Germany, a global leader in solar energy."
            />
          </CentralTile>
          <CentralTile>
            <QnaCard
              question="How much does a typical system cost, and how long will it take to pay itself off?"
              answer="In BC, the average cost of a solar ystem to offset the yearly energy usage of a home is $20,000 to $30,000 (not including battery backup). The payback period is very dependent on site conditions, shading, roof angle, and region, but is typially between 10-15 years."
            />
          </CentralTile>
          <CentralTile>
            <QnaCard
              question="What are the product warranties and who will be around in 10 years to replace equipment if it malfuncitons?"
              answer="We choose inverters and solar panels that come with a 25-year manufacturer warranty, and the brands we use are among the largest solar companies globally, giving you the most assurance that they will exists down the road if equipment fails. Additionally, all of our work is backed by a 5-year workmanship warranty."
            />
          </CentralTile>
          <CentralTile>
            <QnaCard
              question="How long will it take to install solar on my home?"
              answer="Despite the actual installation of solar panels taking only 2-4 days typically, solar project have a timeline of 3-12 weeks (depending on regional permitting requirements). The majority of delays come from waiting for a building permit if one is required. This can take anywhere from a week to 8 weeks depending on the municipality. Will will make sure we give you a realistic timeline based on your region's permit requirements."
            />
          </CentralTile>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            borderBottom: "1px solid grey",
            paddingBottom: "4rem",
          }}>
          {/* <div
            className={`${styles.myButton} ${styles.myButtonDark}`}
            style={{
              backgroundColor: "grey",
              color: "white",
              fontSize: "1.1rem",
            }}>
            More FAQ
          </div> */}
        </div>
      </CentralSection>
      <CentralSection>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            margin: "2rem 0 5rem 0",
          }}>
          <div
            className={`${styles.myButton} ${styles.myButtonDark}`}
            style={{
              backgroundColor: "rgb(64,136,202)",
              color: "white",
              fontSize: "1.8rem",
              width: "100%",
              height: "3rem",
            }}>
            Request Free Solar Quote!
          </div>
        </div>
      </CentralSection>
      <Footer
        footerFlexDirection={footerFlexDirection}
        footerTextMaxWidth={footerTextMaxWidth}
      />
    </div>
  );
}

export default App;
