import FullWidthSection from "../GeneralUI/FullWidthSection";
import BlackFade from "../GeneralUI/BlackFade";
import styles from "./Banner1.module.css";
import { selectTSML } from "../../utils";
import ExpandButton from "../GeneralUI/ExpandButton";

import bg_mobile from "../../images/solarspan1_mobile.jpg";
import bg_medium from "../../images/solarspan1_medium.jpg";
import nabcepSeal from "../../images/pv_assoc_seal.png";

const Banner1 = (props) => {
  const w = props.viewportWidth;
  const background = selectTSML(w, bg_mobile, bg_mobile, bg_medium, bg_medium);
  const minHeight = selectTSML(w, "100vh", "32rem", "32rem", "46rem");
  const fontSize = selectTSML(w, "2rem");
  const nebcepJustify = selectTSML(w, "center", "end", "", "");
  const expandButtonScale = selectTSML(w, "1.5", "", "", "");
  const expandButtonMargin = selectTSML(w, "1.8rem", "", "", "");
  const textAlign = selectTSML(w, "left");
  const nabcepDisplay = selectTSML(w, "none");
  const bannerAlign = selectTSML(w, "center");

  return (
    <FullWidthSection>
      <BlackFade
        backgroundImage={background}
        backgroundOpacity="0.65"
        backgroundAttachment="fixed">
        <div
          className={styles.container}
          style={{ alignItems: bannerAlign, minHeight: minHeight }}>
          <div className={styles.upperContainer}>
            <div
              className={styles.text}
              style={{ fontSize: fontSize, textAlign: textAlign }}>
              Residential solar installation<br></br>
              Pre-wiring and consultation<br></br>
              Off-grid and grid-tied projects<br></br>
            </div>
            <div
              className={styles.nabcepContainer}
              style={{ display: nabcepDisplay, justifyContent: nebcepJustify }}>
              <img
                className={styles.nabcep}
                src={nabcepSeal}
                alt="nabcep seal"
              />
            </div>
          </div>
          <div className={styles.expandButtonContainer}>
            <ExpandButton
              style={{
                zoom: expandButtonScale,
                marginBottom: expandButtonMargin,
              }}
              scrollToId="solarProgramsSection"
            />
          </div>
        </div>
      </BlackFade>
    </FullWidthSection>
  );
};

export default Banner1;
