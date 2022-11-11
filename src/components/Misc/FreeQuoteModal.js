import Modal from "../GeneralUI/Modal";
import styles from "./FreeQuoteModal.module.css";
import GeneralInput from "../GeneralUI/GeneralInput";
import GeneralButton from "../GeneralUI/GeneralButton";
import { selectTSML } from "../../utils";

const FreeQuoteModal = (props) => {
  const w = props.viewportWidth;
  const section234Display = selectTSML(w, "column", "", "", "");
  const section234InputsDisplay = selectTSML(
    w,
    "column",
    "column",
    "column",
    "column"
  );

  return (
    <Modal
      viewportWidth={props.viewportWidth}
      modalVis={props.modalVis}
      toggleModalHandler={props.handleToggleQuoteModal}>
      <form
        className={`${styles.form} noscroll`}
        style={{ marginTop: "-1.5rem" }}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>1. Contact Information</div>
          <GeneralInput
            label="project address"
            type="text"
            style={{ maxWidth: "100%" }}
            placeholder="Address"
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <GeneralInput
              label="your name"
              type="text"
              style={{ maxWidth: "48%" }}
              placeholder="Name"
            />
            <GeneralInput
              label="phone number"
              type="text"
              style={{ maxWidth: "48%" }}
              placeholder="Phone"
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: section234Display,
            width: "100%",
            justifyContent: "space-between",
          }}>
          <div className={styles.sectionContainer}>
            <div className={styles.sectionHeader}>2. Roof Details</div>
            <div
              style={{
                display: "flex",
                flexDirection: section234InputsDisplay,
              }}>
              <GeneralInput
                label="Roof Material"
                type="text"
                style={{ maxWidth: "100%" }}
                placeholder="Asphalt, Metal, etc. "
              />
              <GeneralInput
                label="Roof Age"
                type="text"
                placeholder="Num. Years"
              />
              <GeneralInput
                label="Roof Pitch"
                type="text"
                placeholder="Flat, Mid, Steep?"
              />
            </div>
          </div>
          <div className={styles.sectionContainer}>
            <div className={styles.sectionHeader}>3. Energy Details</div>
            <div
              style={{
                display: "flex",
                flexDirection: section234InputsDisplay,
              }}>
              <GeneralInput
                label="Target Energy Offset"
                type="text"
                style={{ maxWidth: "100%" }}
                placeholder="0%-100% "
              />
              <GeneralInput
                label="Average Hydro Bill"
                type="text"
                style={{ maxWidth: "100%" }}
                placeholder="Dollar Amount"
              />
              <GeneralInput
                label="Billing Cycle"
                type="text"
                style={{ maxWidth: "100%" }}
                placeholder="1 mo, 2 mo, etc."
              />
            </div>
          </div>
          <div className={styles.sectionContainer}>
            <div className={styles.sectionHeader}>4. Equipment Preference</div>
            <div
              style={{
                display: "flex",
                flexDirection: section234InputsDisplay,
              }}>
              <GeneralInput
                label="System Type"
                type="text"
                style={{ maxWidth: "100%" }}
                placeholder="Off-Grid or Grid-Tied"
              />
              <GeneralInput
                label="Battery Backup"
                type="text"
                style={{ maxWidth: "100%" }}
                placeholder="Yes/No"
              />
              <GeneralInput
                label="Budget"
                type="text"
                style={{ maxWidth: "100%" }}
                placeholder="Small to Large"
              />
            </div>
          </div>
        </div>
      </form>
      <GeneralButton
        style={{
          fontSize: "1.5rem",
          width: "100%",
          margin: "0rem 0 1.5rem 0",
          height: "3.8rem",
          backgroundColor: "rgb(39,39,39)",
          color: "white",
        }}>
        Submit Quote Request!
      </GeneralButton>
    </Modal>
  );
};

export default FreeQuoteModal;
