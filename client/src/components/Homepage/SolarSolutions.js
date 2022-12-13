import FullWidthSection from "../GeneralUI/FullWidthSection";
import BlackFade from "../GeneralUI/BlackFade";
import ProductTile from "../GeneralUI/ProductTile";
import { selectTSML } from "../../utils";

import styles from "./SolarSolutions.module.css";

import banner2 from "../../images/solarspan1.jpg";
/* import stringInvIcon from "../../images/panels_string_black.png"; */
import stringInvIcon from "../../images/strings_ground.jpeg";
import microInvIcon from "../../images/microinverter_roof.jpeg";
import batteryIcon from "../../images/encharge3.jpeg";
import bluetoblackIcon from "../../images/blackpanels1.jpeg";

const SolarSolutions = (props) => {
  const w = props.viewportWidth;
  const tileDisplay = selectTSML(w, "flex", "grid", "flex", "flex");
  const tileFlexDirection = selectTSML(w, "column");
  const tileJustify = selectTSML(w, "center", "center", "", "");
  const tileWidth = selectTSML(w, "85%", "85%", "22%", "22%");
  const textAlign = selectTSML(w, "", "", "", "");
  const tileImgHeight = selectTSML(w, "20rem", "20rem", "15rem", "15rem");
  const zoom = selectTSML(w, "0.7", "0.8", "", "");

  return (
    <BlackFade
      backgroundImage={banner2}
      backgroundOpacity="0.5"
      backgroundAttachment="fixed">
      <FullWidthSection>
        <div style={{ maxWidth: "90rem", zoom: zoom }}>
          <div
            className={styles.header}
            style={{ color: "white", fontSize: "2.5rem", marginTop: "4rem" }}>
            Solar <b>Solutions</b>{" "}
          </div>
          <div
            className={styles.text}
            style={{ color: "white", fontSize: "1.5rem", paddingTop: "0" }}>
            Finding a line of solar equipment that fits your vision and budget
            is important - We offer a complete suite of solar solutions for
            grid-tied and off-grid solar projects that can address a variety
            home energy needs.
          </div>
        </div>
        <div
          className={styles.tileGridContainer}
          style={{
            display: tileDisplay,
            flexDirection: tileFlexDirection,
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
              t: "Microinverters pair with individual panels to convert DC to AC right on the roof. This is industry standard best inverter tech, with a larger Return On Investment.",
            },
            {
              id: "ss3",
              h: "Energy Storage",
              img: batteryIcon,
              t: "Tired of losing power when the grid is down? A battery backup can help you maintain continuous power for some or all of your home loads through a power outage.",
            },
            {
              id: "ss4",
              h: "All Black Panels",
              img: bluetoblackIcon,
              t: "Solar panels don't have to affect the aesthetic of your home. With all-black racking and solar panel options, saving on energy can also add a sleek look to your roof.",
            },
          ].map((data) => (
            <ProductTile
              style={{
                width: tileWidth,
                zoom: zoom,
              }}
              imgHeight={tileImgHeight}
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
