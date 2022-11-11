import GeneralButton from "../GeneralUI/GeneralButton";
import GeneralInput from "../GeneralUI/GeneralInput";
import styles from "./ContactCard.module.css";
import modalStyles from "../GeneralUI/Modal.module.css";
import { selectTSML } from "../../utils";

import at_icon from "../../images/at_icon.png";
import msg_icon from "../../images/message_icon.png";
import sendmail_icon from "../../images/sendmail_icon.png";

const ContactCard = (props) => {
  const w = props.viewportWidth;
  const inputDisplay = selectTSML(w, "column");
  const inputWidth = selectTSML(w, "100%", "30%", "30%", "30%");
  const textAreaBottMarg = selectTSML(w, "10rem");
  const scrollMaskImage = selectTSML(w, "", "none", "none", "none");

  return (
    <form className={styles.form} style={props.style}>
      <div
        className={`${styles.nonButtonContainer} noscroll`}
        style={{
          maskImage: scrollMaskImage,
          WebkitMaskImage: scrollMaskImage,
        }}>
        <div className={modalStyles.sectionContainer}>
          <div className={modalStyles.sectionHeader}>
            <img
              className={modalStyles.inputIcon}
              src={at_icon}
              alt="at icon"
            />{" "}
            <div>Contact Details</div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: inputDisplay,
              justifyContent: "space-between",
            }}>
            <GeneralInput
              label="Full Name"
              type="text"
              style={{ maxWidth: inputWidth }}
              placeholder="Name"
            />
            <GeneralInput
              label="Phone Number"
              type="text"
              style={{ maxWidth: inputWidth }}
              placeholder="Number"
            />
            <GeneralInput
              label="Email Address"
              type="email"
              style={{ maxWidth: inputWidth }}
              placeholder="Email"
            />
          </div>
        </div>
        <div
          className={modalStyles.sectionContainer}
          style={{ marginBottom: textAreaBottMarg }}>
          <div className={modalStyles.sectionHeader}>
            <img
              className={modalStyles.inputIcon}
              src={msg_icon}
              alt="msg icon"
            />{" "}
            <div>Message</div>
          </div>
          <textarea className={styles.textArea} rows="8" />
        </div>
      </div>

      <GeneralButton
        style={{
          backgroundColor: "transparent",
          boxShadow: "none",
          fontSize: "1.6rem",
          width: "98%",
          alignSelf: "flex-start",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}>
        <div>Send Message</div>

        <img
          style={{ marginLeft: "0.6rem", height: "2.3rem" }}
          src={sendmail_icon}
          alt="send icon"
        />
      </GeneralButton>
    </form>
  );
};

export default ContactCard;
