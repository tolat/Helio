import styles from "./NavBar.module.css";
import NavButton from "./NavButton";
import logo from "../../../images/Helio_logo2_nobg_light.png";
import {
  selectTSML,
  handleToggleModal,
  useScrollPosition,
} from "../../../utils";
import React from "react";
import { useWindowSize } from "usehooks-ts";

const NavBar = (props) => {
  const { width } = useWindowSize();
  const scrollPosition = useScrollPosition();
  const reduceNavbarHeigthOnScroll = 2;
  const initialBarHeight = 6;

  const onQuoteButtonClick = () => {
    handleToggleModal(props.setQuoteModalVis);
  };

  const onContactButtonClick = () => {
    handleToggleModal(props.setContactModalVis);
  };

  const onFAQButtonClick = () => {
    let zoom = parseFloat(document.getElementById("App").style.zoom);
    let offsetPosition =
      (document.getElementById("FAQsection").getBoundingClientRect().top -
        130) *
      zoom;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  function convertRemToPixels(rem) {
    return (
      rem * parseFloat(getComputedStyle(document.documentElement).fontSize)
    );
  }

  function capNumber(num, cap) {
    return num > cap ? cap : num;
  }

  const bgOpacity = capNumber(scrollPosition / convertRemToPixels(10), 1);

  const barHeight = `${
    initialBarHeight -
    capNumber(
      (reduceNavbarHeigthOnScroll * scrollPosition) / convertRemToPixels(10),
      reduceNavbarHeigthOnScroll
    )
  }rem`;

  const w = props.viewportWidth;
  const fq = "FREE QUOTE";
  const quoteButtonText = selectTSML(w, "QUOTE", fq, fq, fq);

  return (
    <React.Fragment>
      <div
        style={{ opacity: bgOpacity, height: barHeight }}
        className={styles.backgroundDiv}
      />
      <div className={styles.container}>
        <div className={styles.navbar} style={{ height: barHeight }}>
          <img className={styles.navbarLogo} src={logo} alt="company logo" />
          <div className={styles.buttonContainer}>
            <NavButton text="Contact" onClick={onContactButtonClick} />
            <NavButton text="FAQ" onClick={onFAQButtonClick} />
            <NavButton text={quoteButtonText} onClick={onQuoteButtonClick} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NavBar;
