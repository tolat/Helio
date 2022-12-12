import styles from "./NavDrawer.module.css";
import NavButton from "./NavButton";
import {
  handleToggleModal,
  clickBurgerMenuIcon,
  selectTSML,
} from "../../../utils";
import { useWindowSize } from "usehooks-ts";

const NavDrawer = (props) => {
  const { width } = useWindowSize();
  const fq = "FREE QUOTE";
  const quoteButtonText = selectTSML(width, "QUOTE", fq, fq, fq);

  const onQuoteButtonClick = () => {
    handleToggleModal(props.setQuoteModalVis);
    clickBurgerMenuIcon(true);
  };

  const onContactButtonClick = () => {
    handleToggleModal(props.setContactModalVis);
    clickBurgerMenuIcon(true);
  };

  const onFAQButtonClick = () => {
    let zoom = parseFloat(document.getElementById("App").style.zoom);
    let offsetPosition =
      (document.getElementById("FAQsection").getBoundingClientRect().top -
        130) *
      zoom;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
    clickBurgerMenuIcon(true);
  };

  return (
    <div id="navDrawer" className={styles.container}>
      <div className={styles.dropdownButtons}>
        <NavButton text="Contact" onClick={onContactButtonClick} />
        <NavButton text="FAQ" onClick={onFAQButtonClick} />
        <NavButton text={quoteButtonText} onClick={onQuoteButtonClick} />
      </div>
    </div>
  );
};

export default NavDrawer;
