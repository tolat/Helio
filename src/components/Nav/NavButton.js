import styles from "./NavButton.module.css";

const NavButton = (props) => {
  let localStyle = {};
  if (props.black) {
    localStyle = { color: "white", backgroundColor: "black" };
  }

  return (
    <div className={styles.navButton} style={localStyle}>
      <div>{props.text}</div>
    </div>
  );
};

export default NavButton;
