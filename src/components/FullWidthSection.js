import styles from "./FullWidthSection.module.css";

const FullWidthSection = (props) => {
  return (
    <div className={styles.fullWidthSection} style={props.style}>
      {props.children}
    </div>
  );
};

export default FullWidthSection;
