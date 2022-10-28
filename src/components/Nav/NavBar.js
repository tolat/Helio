import styles from "./NavBar.module.css";
import NavButton from "./NavButton";
import logo from "../../images/Helio_logo_nobg_1.png";

const NavBar = (props) => {
  return (
    <div className={styles.navbar}>
      <img className={styles.navbarLogo} src={logo} alt="company logo" />
      <div className={styles.buttonContainer}>
        <NavButton text="About" />
        <NavButton text="FAQ" />
        <NavButton text="Free Quote" black="true" />
      </div>
    </div>
  );
};

export default NavBar;
