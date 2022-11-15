import GeneralButton from "../GeneralUI/GeneralButton";
import GeneralInput from "../GeneralUI/GeneralInput";
import styles from "./ContactCard.module.css";
import modalStyles from "../GeneralUI/Modal.module.css";
import { selectTSML, sendMessage } from "../../utils";
import { useState } from "react";

import at_icon from "../../images/at_icon.png";
import msg_icon from "../../images/message_icon.png";
import sendmail_icon from "../../images/sendmail_icon.png";

const ContactCard = (props) => {
  const w = props.viewportWidth;
  const inputDisplay = selectTSML(w, "column");
  const inputWidth = selectTSML(w, "100%", "30%", "30%", "30%");
  const textAreaBottMarg = selectTSML(w, "10rem");
  const scrollMaskImage = selectTSML(w, "", "none", "none", "none");

  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userName, setUserName] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const emailChangedHandler = (event) => {
    setUserEmail(event.target.value);
  };
  const phoneChangedHandler = (event) => {
    setUserPhone(event.target.value);
  };
  const nameChangedHandler = (event) => {
    setUserName(event.target.value);
  };
  const messageChangedHandler = (event) => {
    setUserMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      name: userName,
      phone: userPhone,
      email: userEmail,
      message: userMessage,
    };

    const resetSuccess = () => {
      setUserName("");
      setUserPhone("");
      setUserEmail("");
      setUserMessage("");
    };

    sendMessage(formData, "/message", resetSuccess, (error) => {
      console.log(error);
    });
  };

  return (
    <form className={styles.form} style={props.style} onSubmit={handleSubmit}>
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
            <div>Contact Information</div>
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
              onChange={nameChangedHandler}
              value={userName}
            />
            <GeneralInput
              label="Phone Number"
              type="text"
              style={{ maxWidth: inputWidth }}
              placeholder="Number"
              onChange={phoneChangedHandler}
              value={userPhone}
            />
            <GeneralInput
              label="Email Address"
              type="email"
              style={{ maxWidth: inputWidth }}
              placeholder="Email"
              onChange={emailChangedHandler}
              value={userEmail}
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
          <textarea
            onChange={messageChangedHandler}
            value={userMessage}
            className={styles.textArea}
            rows="8"
          />
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
