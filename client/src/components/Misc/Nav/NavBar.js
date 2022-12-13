import styles from "./NavBar.module.css";
import NavButton from "./NavButton";
import logo from "../../../images/Helio_logo2_nobg_light.png";
import {
  selectTSML,
  handleToggleModal,
  useScrollPosition,
  toggleNavDrawer,
} from "../../../utils";
import React from "react";
import { useWindowSize } from "usehooks-ts";
import { Turn as Hamburger } from "hamburger-react";
import { useState } from "react";

const NavBar = (props) => {
  const { width } = useWindowSize();
  const scrollPosition = useScrollPosition();
  const reduceNavbarHeigthOnScroll = 2;
  const initialBarHeight = 6;
  const burgerMenuDisplay = selectTSML(width, "flex");
  const buttonsDisplay = selectTSML(width, "none");
  const [isOpen, setOpen] = useState(false);

  const onQuoteButtonClick = () => {
    handleToggleModal(props.setQuoteModalVis);
  };

  const onContactButtonClick = () => {
    handleToggleModal(props.setContactModalVis);
  };

  const onFAQButtonClick = () => {
    let zoom =
      width < process.env.REACT_APP_BREAKPOINT_S
        ? 0.8
        : width < process.env.REACT_APP_BREAKPOINT_T
        ? 0.7
        : 1;
    let offsetPosition =
      document.getElementById("FAQsection").getBoundingClientRect().top - 130;

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

  return (
    <React.Fragment>
      <div
        style={{ opacity: bgOpacity, height: barHeight }}
        className={styles.backgroundDiv}
      />
      <div className={styles.container}>
        <div className={styles.navbar} style={{ height: barHeight }}>
          <img className={styles.navbarLogo} src={logo} alt="company logo" />
          <div
            className={styles.buttonContainer}
            style={{ display: buttonsDisplay }}>
            <NavButton text="Contact" onClick={onContactButtonClick} />
            <NavButton text="FAQ" onClick={onFAQButtonClick} />
            <NavButton
              text="Free Quote"
              onClick={onQuoteButtonClick}
              black={true}
            />
          </div>
        </div>
      </div>
      <div
        className={`${styles.burgerButton} invertFilter`}
        style={{ height: barHeight, display: burgerMenuDisplay }}
        onClick={toggleNavDrawer}
        id="burgerMenu">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
    </React.Fragment>
  );
};

export default NavBar;
