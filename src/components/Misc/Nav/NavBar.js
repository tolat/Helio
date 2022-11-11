import styles from "./NavBar.module.css";
import NavButton from "./NavButton";
import logo from "../../../images/Helio_logo2_nobg.png";
import { selectTSML } from "../../../utils";

const NavBar = (props) => {
  const handleFreeQuoteClicked = () => {
    props.handleToggleQuoteModal();
  };

  const w = props.viewportWidth;
  const quoteButtonText = selectTSML(
    w,
    "Quote",
    "Free Quote",
    "Free Quote",
    "Free Quote"
  );

  return (
    <div className={styles.navbar}>
      <img className={styles.navbarLogo} src={logo} alt="company logo" />
      <div className={styles.buttonContainer}>
        <NavButton text="Contact" />
        <NavButton text="FAQ" />
        <NavButton
          text={quoteButtonText}
          black="true"
          onClick={handleFreeQuoteClicked}
        />
      </div>
    </div>
  );
};

export default NavBar;
