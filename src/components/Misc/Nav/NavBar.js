import styles from "./NavBar.module.css";
import NavButton from "./NavButton";
import logo from "../../../images/Helio_logo2_nobg.png";

const NavBar = (props) => {
  const handleFreeQuoteClicked = () => {
    props.handleToggleQuoteModal();
  };

  return (
    <div className={styles.navbar}>
      <img className={styles.navbarLogo} src={logo} alt="company logo" />
      <div className={styles.buttonContainer}>
        <NavButton text="Contact" />
        <NavButton text="FAQ" />
        <NavButton
          text="Free Quote"
          black="true"
          onClick={handleFreeQuoteClicked}
        />
      </div>
    </div>
  );
};

export default NavBar;
