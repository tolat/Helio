import styles from "./Modal.module.css";
import { selectTSML } from "../../utils";
import closeButton from "../../images/close_button.png";

const Modal = (props) => {
  const w = props.viewportWidth;
  const modalWidth = selectTSML(w, "100%", "900px", "900px", "900px");
  const modalHeight = selectTSML(w, "100%", "", "", "");
  const modalZoom = selectTSML(w, "0.9", "0.8", "1", "1");

  return (
    <div
      className={`${styles.container} noscroll`}
      style={{
        opacity: props.modalVis.opacity,
        visibility: props.modalVis.visibility,
      }}>
      <div className={styles.blackout}></div>
      <div
        className={`${styles.modal} noscroll`}
        style={{
          width: modalWidth,
          zoom: modalZoom,
          height: modalHeight,
        }}>
        <div className={styles.sidepanel}></div>
        <div className={styles.headerContainer}>
          <div className={styles.headerSpacer}></div>
          <img
            src={closeButton}
            className={styles.closeModalButton}
            alt="exit modal button"
            onClick={props.toggleModalHandler}
          />
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
