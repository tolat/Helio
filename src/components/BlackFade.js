import styles from "./BlackFade.module.css";

const BlackFade = (props) => {
  return <div className={styles.blackFade}>{props.children}</div>;
};

export default BlackFade;
