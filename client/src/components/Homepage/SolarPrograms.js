import CentralTile from "../GeneralUI/CentralTile";
import CentralSection from "../GeneralUI/CentralSection";
import styles from "./SolarPrograms.module.css";
import { selectTSML } from "../../utils";

import greenerhomes_graphic from "../../images/greener_homes_graphic.jpg";
import nm_hor from "../../images/netmetering_graphic2.png";
import nm_ver from "../../images/netmetering_graphic_vertical.jpg";

const SolarPrograms = (props) => {
  const w = props.viewportWidth;
  const tileFlexDirection = selectTSML(w, "column", "column", "row", "row");
  const tileWidth = selectTSML(w, "100%", "100%", "50%", "50%");
  const nm_graphic = selectTSML(w, nm_ver, nm_ver, nm_hor, nm_hor);

  return (
    <CentralSection style={{ flexDirection: `${tileFlexDirection}` }}>
      <CentralTile
        style={{ width: `${tileWidth}`, justifyContent: "space-between" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className={styles.header}>
            Solar <b>Incentives</b>
          </div>
          <div className={styles.incentive}>$5,000 Greener Homes Grant</div>
          <div className={styles.text}>
            The Canada greener homes grant provides Canadians with $1 per kW of
            Solar installed, up to a maximum of $5,000. To receive the grant you
            must own your home, and it must be your primary residence.
          </div>
          <div className={styles.incentive}>
            $40,000 Interest-Free Greener Homes Loan
          </div>
          <div className={styles.text}>
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
          <img src={greenerhomes_graphic} alt="greener homes path graphic" />
          <br />
          <br />
        </div>
        <div>
          Click{" "}
          <a href="https://www.nrcan.gc.ca/energy-efficiency/homes/canada-greener-homes-grant/23441">
            HERE
          </a>{" "}
          for more information about the Greener Homes Program
        </div>
      </CentralTile>
      <CentralTile
        style={{ width: `${tileWidth}`, justifyContent: "space-between" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className={styles.header}>
            BC <b>Net Metering</b>
          </div>
          <div className={styles.text}>
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
            src={nm_graphic}
            alt="Net Metering Graphic"
          />
        </div>
        <div>
          Click{" "}
          <a href="https://app.bchydro.com/accounts-billing/electrical-connections/net-metering.html">
            HERE
          </a>{" "}
          for more information about Net Metering.
        </div>
      </CentralTile>
    </CentralSection>
  );
};

export default SolarPrograms;
