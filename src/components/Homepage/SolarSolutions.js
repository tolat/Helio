import FullWidthSection from "../GeneralUI/FullWidthSection";
import BlackFade from "../GeneralUI/BlackFade";
import ProductTile from "../GeneralUI/ProductTile";
import { selectSML } from "../../utils";

import styles from "./SolarSolutions.module.css";

import banner2 from "../../images/solarspan1.jpg";
import stringInvIcon from "../../images/panels_string.png";
import microInvIcon from "../../images/panels_micro.png";
import batteryIcon from "../../images/battery.png";
import bluetoblackIcon from "../../images/bluetoblack.png";

const SolarSolutions = (props) => {
  const w = props.viewportWidth;
  const tileDisplay = selectSML(w, "grid", "flex", "flex");
  const tileJustify = selectSML(w, "center", "", "");
  const tileWidth = selectSML(w, "80%", "20%", "20%");
  const textAlign = selectSML(w, "center", "", "");

  return (
    <BlackFade backgroundImage={banner2} backgroundOpacity="0.65">
      <FullWidthSection>
        <div style={{ maxWidth: "90rem" }}>
          <div
            className={styles.header}
            style={{ color: "white", fontSize: "2.5rem" }}>
            Solar <b>Solutions</b>{" "}
          </div>
          <div
            className={styles.text}
            style={{ color: "white", fontSize: "1.5rem", paddingTop: "0" }}>
            Finding a line of solar equipment that fits your vision and budget
            is important - We offer a complete suite of solar solutions for
            grid-tied and off-grid solar projects that aims to cover all your
            home energy needs!
          </div>
        </div>
        <div
          className={styles.tileGridContainer}
          style={{
            display: tileDisplay,
            justifyItems: tileJustify,
            maxWidth: "90rem",
          }}>
          {[
            {
              id: "ss1",
              h: "String Inverters",
              img: stringInvIcon,
              t: "String inverters convert all your DC solar energy to AC in one unit. With the most attractive pricetag, they are ideal for minimizing your solar Payback Period.",
            },
            {
              id: "ss2",
              h: "Microinverters",
              img: microInvIcon,
              t: "Miroinverters pair with individual panels to convert DC to AC right on the roof. This is the standard for the best inverter technology, with a larger Return On Investment.",
            },
            {
              id: "ss3",
              h: "Energy Storage",
              img: batteryIcon,
              t: "Tired of losing power when the grid is down? A battery backup can help you maintian continuous power for some or all of your home loads through a power outage.",
            },
            {
              id: "ss4",
              h: "All Black Panels",
              img: bluetoblackIcon,
              t: "Solar panels don't have to affect the aesthetic of your home. With all-black racking and solar panel options, saving on energy can also add a sleek look to your roof.",
            },
          ].map((data) => (
            <ProductTile
              style={{ width: tileWidth }}
              key={data.id}
              header={data.h}
              img={data.img}
              text={data.t}
              textStyles={{ textAlign: textAlign }}
            />
          ))}
        </div>
      </FullWidthSection>
    </BlackFade>
  );
};

export default SolarSolutions;
