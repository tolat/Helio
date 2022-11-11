import Modal from "../GeneralUI/Modal";
import styles from "./FreeQuoteModal.module.css";
import GeneralInput from "../GeneralUI/GeneralInput";
import GeneralButton from "../GeneralUI/GeneralButton";
import { selectTSML } from "../../utils";

import energy_icon from "../../images/energy_icon.png";
import roof_icon from "../../images/roof_icon.png";
import at_icon from "../../images/at_icon.png";
import solar_icon from "../../images/solar_icon.png";

const FreeQuoteModal = (props) => {
  const w = props.viewportWidth;
  const col = "column";
  const lowerSectionFlexDirection = selectTSML(w, "column", "", "", "");
  const lowerSectionInputsFlexDirection = selectTSML(w, col, col, col, col);
  const upperFlexDirection = selectTSML(w, "column", "row", "row", "row");
  const formFade = selectTSML(w, "bottomFade", "", "", "");

  return (
    <Modal
      viewportWidth={props.viewportWidth}
      modalVis={props.modalVis}
      toggleModalHandler={props.handleToggleQuoteModal}>
      <form
        className={`${styles.form} noscroll ${formFade}`}
        style={{ marginTop: "-1.5rem" }}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <img className={styles.inputIcon} src={at_icon} alt="roof icon" />{" "}
            <div>Contact Information</div>
          </div>
          <GeneralInput
            label="project address"
            type="text"
            style={{ maxWidth: "100%" }}
            placeholder="Address"
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: upperFlexDirection,
            }}>
            <GeneralInput label="your name" type="text" placeholder="Name" />
            <GeneralInput
              label="phone number"
              type="number"
              placeholder="Phone"
            />
            <GeneralInput
              label="email address"
              type="email"
              placeholder="Email"
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: lowerSectionFlexDirection,
            width: "100%",
            justifyContent: "space-between",
          }}>
          <div className={styles.sectionContainer}>
            <div className={styles.sectionHeader}>
              <img
                className={styles.inputIcon}
                src={roof_icon}
                alt="roof icon"
              />{" "}
              <div>Roof Details</div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: lowerSectionInputsFlexDirection,
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
            <div className={styles.sectionHeader}>
              <img
                className={styles.inputIcon}
                src={energy_icon}
                alt="energy icon"
              />{" "}
              <div>Energy Details</div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: lowerSectionInputsFlexDirection,
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
            <div className={styles.sectionHeader}>
              <img
                className={styles.inputIcon}
                src={solar_icon}
                alt="energy icon"
              />{" "}
              <div>Equipment Preference</div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: lowerSectionInputsFlexDirection,
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
          margin: "0rem 0 1rem 0",
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
