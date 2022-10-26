import styles from "./NavBar.module.css";
import NavButton from "./NavButton";

const NavBar = (props) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarLogo}></div>
      <div className={styles.buttonContainer}>
        <NavButton text="About" />
        <NavButton text="FAQ" />
        <NavButton text="Request Free Quote" black="true" />
      </div>
    </div>
  );
};

export default NavBar;
