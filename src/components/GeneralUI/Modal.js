import styles from "./Modal.module.css";
import { selectSML } from "../../utils";

const Modal = (props) => {
  const w = props.viewportWidth;
  const modalWidth = selectSML(w, "90%", "800px", "800px");
  const modalHeight = selectSML(w, "90%", "", "");

  return (
    <div
      className={styles.container}
      style={{
        opacity: props.modalVis.o,
        visibility: props.modalVis.v,
      }}
      onScroll={props.onScroll}>
      <div className={styles.blackout}></div>
      <div
        className={styles.modal}
        style={{ width: modalWidth, height: modalHeight }}>
        <div className={styles.modalTitle}>{props.title}</div>
        <div className={styles.closeModalButton}></div>
        <div>{props.children}</div>
      </div>
    </div>
  );
};

export default Modal;
