import FullWidthSection from "../GeneralUI/FullWidthSection";
import BlackFade from "../GeneralUI/BlackFade";
import styles from "./Banner1.module.css";
import { selectTSML } from "../../utils";

import bg_t from "../../images/solarspan3_tiny.jpg";
import bg_m from "../../images/solarspan3.jpg";
import bg_s from "../../images/solarspan3_small.jpg";
import bg_l from "../../images/solarspan3_large.jpg";
import nabcepSeal from "../../images/pv_assoc_seal.png";

const Banner1 = (props) => {
  const w = props.viewportWidth;
  const background = selectTSML(w, bg_t, bg_s, bg_m, bg_l);

  return (
    <FullWidthSection style={{ marginTop: "var(--navBarHeight)" }}>
      <BlackFade backgroundImage={background} backgroundOpacity="0.7">
        <div className={styles.container}>
          <div className={styles.text}>
            Residential solar installation<br></br>
            Pre-wiring and consultation<br></br>
            Off-grid and grid-tied projects<br></br>
          </div>
          <img className={styles.nabcep} src={nabcepSeal} alt="nabcep seal" />
        </div>
      </BlackFade>
    </FullWidthSection>
  );
};

export default Banner1;
