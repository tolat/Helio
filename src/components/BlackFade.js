import styles from "./BlackFade.module.css";
import { useWindowSize } from "usehooks-ts";

const BlackFade = (props) => {
  const { width } = useWindowSize();
  const globals = props.globals;

  let backgroundImg =
    width < globals.wSmall
      ? props.backgroundImages[1]
      : width > globals.wLarge
      ? props.backgroundImages[2]
      : props.backgroundImages[0];

  return (
    <div className={styles.container}>
      <div
        className={styles.backgroundContainer}
        style={{
          backgroundImage: `url(".${backgroundImg}")`,
          opacity: `${props.backgroundOpacity}`,
        }}
      />
      <div className={styles.childrenContainer}>{props.children}</div>
    </div>
  );
};

export default BlackFade;
