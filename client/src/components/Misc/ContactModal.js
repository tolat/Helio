import Modal from "../GeneralUI/Modal";
import ContactCard from "./ContactCard";
import { selectTSML } from "../../utils";

const ContactModal = (props) => {
  const w = props.viewportWidth;
  const quoteModalWidth = selectTSML(w, "100%", "", "", "");
  const quoteModalHeight = selectTSML(w, "100%", "", "", "");
  const quoteModalMaxHeight = selectTSML(w, "", "80%", "80%", "80%");

  return (
    <Modal
      viewportWidth={props.viewportWidth}
      modalVis={props.modalVis}
      setModalVis={props.setModalVis}
      modalWidth={quoteModalWidth}
      modalHeight={quoteModalHeight}
      modalMaxHeight={quoteModalMaxHeight}
      side>
      <ContactCard viewportWidth={props.viewportWidth}></ContactCard>
    </Modal>
  );
};

export default ContactModal;
