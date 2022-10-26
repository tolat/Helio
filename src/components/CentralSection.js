import styles from "./CentralSection.module.css";
import FullWidthSection from "./FullWidthSection";

const CentralSection = (props) => {
  return (
    <div className={styles.centralSectionContainer}>
      <div className={styles.centralSection}>{props.children}</div>
    </div>
  );
};

export default CentralSection;
