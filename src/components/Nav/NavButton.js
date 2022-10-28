import styles from "./NavButton.module.css";

const NavButton = (props) => {
  return (
    <div
      className={`${styles.navButton} ${
        props.black ? styles.navButtonBlack : ""
      }`}>
      <div>{props.text}</div>
    </div>
  );
};

export default NavButton;
