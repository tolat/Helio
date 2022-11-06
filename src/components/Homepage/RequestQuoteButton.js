import CentralSection from "../GeneralUI/CentralSection";
import styles from "../../App.module.css";

const RequestQuoteButton = (props) => {
  return (
    <CentralSection>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          margin: "2rem 0 5rem 0",
        }}>
        <div
          className={`${styles.myButton} ${styles.myButtonDark}`}
          style={{
            backgroundColor: "rgb(64,136,202)",
            color: "white",
            fontSize: "1.8rem",
            width: "100%",
            height: "3rem",
          }}>
          Request Free Solar Quote!
        </div>
      </div>
    </CentralSection>
  );
};

export default RequestQuoteButton;
