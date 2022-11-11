import styles from "./NavBar.module.css";
import NavButton from "./NavButton";
import logo from "../../../images/Helio_logo2_nobg.png";
import { selectTSML, handleToggleModal } from "../../../utils";

const NavBar = (props) => {
  const onQuoteButtonClick = () => {
    handleToggleModal(props.setQuoteModalVis);
  };
  const onContactButtonClick = () => {
    handleToggleModal(props.setContactModalVis);
  };

  const w = props.viewportWidth;
  const fq = "Free Quote";
  const quoteButtonText = selectTSML(w, "Quote", fq, fq, fq);

  return (
    <div className={styles.navbar}>
      <img className={styles.navbarLogo} src={logo} alt="company logo" />
      <div className={styles.buttonContainer}>
        <NavButton text="Contact" onClick={onContactButtonClick} />
        <NavButton text="FAQ" />
        <NavButton
          text={quoteButtonText}
          black="true"
          onClick={onQuoteButtonClick}
        />
      </div>
    </div>
  );
};

export default NavBar;
