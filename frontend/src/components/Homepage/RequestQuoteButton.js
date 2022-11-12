import CentralSection from "../GeneralUI/CentralSection";
import GeneralButton from "../GeneralUI/GeneralButton";
import { handleToggleModal } from "../../utils";

const RequestQuoteButton = (props) => {
  const clickHandler = () => {
    handleToggleModal(props.setModalVis);
  };
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
        <GeneralButton
          style={{
            backgroundColor: "rgb(64,136,202)",
            color: "white",
            fontSize: "1.8rem",
            width: "100%",
            height: "4rem",
          }}
          onClick={clickHandler}>
          Request Free Solar Quote!
        </GeneralButton>
      </div>
    </CentralSection>
  );
};

export default RequestQuoteButton;