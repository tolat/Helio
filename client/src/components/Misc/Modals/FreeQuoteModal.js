import Modal from "../../GeneralUI/Modal";
import styles from "./FreeQuoteModal.module.css";
import GeneralInput from "../../GeneralUI/GeneralInput";
import GeneralButton from "../../GeneralUI/GeneralButton";
import { selectTSML, showFlash, closeFlash, sendMessage } from "../../../utils";
import modalStyles from "../../GeneralUI/Modal.module.css";

import energy_icon from "../../../images/energy_icon.png";
import roof_icon from "../../../images/roof_icon.png";
import at_icon from "../../../images/at_icon.png";
import solar_icon from "../../../images/solar_icon.png";
import sendmail_icon from "../../../images/sendmail_icon.png";
import { useState } from "react";

const FreeQuoteModal = (props) => {
  const w = props.viewportWidth;
  const col = "column";
  const lowerSectionFlexDirection = selectTSML(w, "column", "", "", "");
  const lowerSectionInputsFlexDirection = selectTSML(w, col, col, col, col);
  const upperFlexDirection = selectTSML(w, "column", "row", "row", "row");
  const formFade = selectTSML(w, "bottomFade");
  const quoteModalWidth = selectTSML(w, "100%");
  const quoteModalHeight = selectTSML(w, "100%");
  const quoteModalMaxHeight = selectTSML(w, "", "80%", "80%", "80%");
  const scrollMaskImage = selectTSML(w, "", "none", "none", "none");
  const equipPrefMarginBottom = selectTSML(w, "10rem", "", "", "");

  const [userAddress, setUserAddress] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userName, setUserName] = useState("");
  const [roofMaterial, setRoofMaterial] = useState("");
  const [roofAge, setRoofAge] = useState("");
  const [roofPitch, setRoofPitch] = useState("");
  const [targetOffset, setTargetOffset] = useState("");
  const [averageBill, setAverageBill] = useState("");
  const [billingCycle, setBillingCycle] = useState("");
  const [systemType, setSystemType] = useState("");
  const [batteryBackup, setBatteryBackup] = useState("");
  const [budget, setBudget] = useState("");

  const addressChangedHandler = (event) => {
    setUserAddress(event.target.value);
  };
  const emailChangedHandler = (event) => {
    setUserEmail(event.target.value);
  };
  const phoneChangedHandler = (event) => {
    setUserPhone(event.target.value);
  };
  const nameChangedHandler = (event) => {
    setUserName(event.target.value);
  };
  const roofMaterialChangedHandler = (event) => {
    setRoofMaterial(event.target.value);
  };
  const roofAgeChangedHandler = (event) => {
    setRoofAge(event.target.value);
  };
  const roofPitcChangedhHandler = (event) => {
    setRoofPitch(event.target.value);
  };
  const targetOffsetChangedHandler = (event) => {
    setTargetOffset(event.target.value);
  };
  const averageBillChangedHandler = (event) => {
    setAverageBill(event.target.value);
  };
  const billingCycleChangedHandler = (event) => {
    setBillingCycle(event.target.value);
  };
  const systemTypeChangedHandler = (event) => {
    setSystemType(event.target.value);
  };
  const batterBackupChangedHandler = (event) => {
    setBatteryBackup(event.target.value);
  };
  const budgetChangedHandler = (event) => {
    setBudget(event.target.value);
  };

  const clearModal = () => {
    setUserAddress("");
    setUserName("");
    setUserPhone("");
    setUserEmail("");
    setRoofMaterial("");
    setRoofAge("");
    setRoofPitch("");
    setTargetOffset("");
    setAverageBill("");
    setBillingCycle("");
    setSystemType("");
    setBatteryBackup("");
    setBudget("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      type: "Quote",
      userAddress,
      userName,
      userPhone,
      userEmail,
      roofMaterial,
      roofAge,
      roofPitch,
      targetOffset,
      averageBill,
      billingCycle,
      systemType,
      batteryBackup,
      budget,
    };

    const resetSuccess = () => {
      clearModal();

      showFlash(
        "appFlash",
        "Quote sent successfully!",
        "Thank you for your request. We will get in touch with you if we have any questions, otherwise you can expect a quote within 3 business days.",
        "rgb(164,231,169)"
      );

      setTimeout(() => {
        closeFlash("appFlash");
      }, 20000);
    };

    const resetFailure = (error) => {
      showFlash(
        "appFlash",
        "There was an error sending your request.",
        error.message,
        "rgb(231,164,164)"
      );
    };

    try {
      sendMessage(formData, "/quote", resetSuccess, resetFailure);
    } catch (e) {
      resetFailure(e);
    }
  };

  return (
    <Modal
      viewportWidth={props.viewportWidth}
      setModalVis={props.setModalVis}
      modalVis={props.modalVis}
      modalWidth={quoteModalWidth}
      modalHeight={quoteModalHeight}
      modalMaxHeight={quoteModalMaxHeight}>
      <form
        className={`${styles.form} noscroll ${formFade}`}
        style={{
          marginTop: "-1.5rem",
          maskImage: scrollMaskImage,
          WebkitMaskImage: scrollMaskImage,
        }}>
        <div className={modalStyles.sectionContainer}>
          <div className={modalStyles.sectionHeader}>
            <img
              className={modalStyles.inputIcon}
              src={at_icon}
              alt="roof icon"
            />{" "}
            <div>Contact Information</div>
          </div>
          <GeneralInput
            label="project address"
            type="text"
            style={{ maxWidth: "100%" }}
            placeholder="Address"
            value={userAddress}
            onChange={addressChangedHandler}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: upperFlexDirection,
            }}>
            <GeneralInput
              label="your name"
              type="text"
              placeholder="Name"
              value={userName}
              onChange={nameChangedHandler}
            />
            <GeneralInput
              label="phone number"
              type="number"
              placeholder="Phone"
              value={userPhone}
              onChange={phoneChangedHandler}
            />
            <GeneralInput
              label="email address"
              type="email"
              placeholder="Email"
              value={userEmail}
              onChange={emailChangedHandler}
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
          <div className={modalStyles.sectionContainer}>
            <div className={modalStyles.sectionHeader}>
              <img
                className={modalStyles.inputIcon}
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
                value={roofMaterial}
                onChange={roofMaterialChangedHandler}
              />
              <GeneralInput
                label="Roof Age"
                type="text"
                placeholder="Num. Years"
                value={roofAge}
                onChange={roofAgeChangedHandler}
              />
              <GeneralInput
                label="Roof Pitch"
                type="text"
                placeholder="Flat, Mid, Steep?"
                value={roofPitch}
                onChange={roofPitcChangedhHandler}
              />
            </div>
          </div>
          <div className={modalStyles.sectionContainer}>
            <div className={modalStyles.sectionHeader}>
              <img
                className={modalStyles.inputIcon}
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
                value={targetOffset}
                onChange={targetOffsetChangedHandler}
              />
              <GeneralInput
                label="Average Hydro Bill"
                type="text"
                style={{ maxWidth: "100%" }}
                placeholder="Dollar Amount"
                value={averageBill}
                onChange={averageBillChangedHandler}
              />
              <GeneralInput
                label="Billing Cycle"
                type="text"
                style={{ maxWidth: "100%" }}
                placeholder="1 mo, 2 mo, etc."
                value={billingCycle}
                onChange={billingCycleChangedHandler}
              />
            </div>
          </div>
          <div
            className={modalStyles.sectionContainer}
            style={{ marginBottom: equipPrefMarginBottom }}>
            <div className={modalStyles.sectionHeader}>
              <img
                className={modalStyles.inputIcon}
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
                value={systemType}
                onChange={systemTypeChangedHandler}
              />
              <GeneralInput
                label="Battery Backup"
                type="text"
                style={{ maxWidth: "100%" }}
                placeholder="Yes/No"
                value={batteryBackup}
                onChange={batterBackupChangedHandler}
              />
              <GeneralInput
                label="Budget"
                type="text"
                style={{ maxWidth: "100%" }}
                placeholder="Dollar Range"
                value={budget}
                onChange={budgetChangedHandler}
              />
            </div>
          </div>
        </div>
      </form>

      <GeneralButton
        style={{
          backgroundColor: "transparent",
          boxShadow: "none",
          fontSize: "1.6rem",
          width: "94%",
          alignSelf: "flex-start",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          margin: "0 0 3rem 0",
        }}
        onClick={handleSubmit}>
        <div>Submit Quote Request</div>

        <img
          style={{ marginLeft: "0.6rem", height: "2.3rem" }}
          src={sendmail_icon}
          alt="send icon"
        />
      </GeneralButton>
    </Modal>
  );
};

export default FreeQuoteModal;
