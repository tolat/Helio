import styles from "./FullWidthSection.module.css";

const FullWidthSection = (props) => {
  return <div className={styles.fullWidthSection}>{props.children}</div>;
};

export default FullWidthSection;
