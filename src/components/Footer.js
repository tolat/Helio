import styles from "./Footer.module.css";
import FullWidthSection from "./FullWidthSection";
import CentralSection from "./CentralSection";
import light_logo from "../images/Helio_logo2_nobg_light.png";

const Footer = (props) => {
  return (
    <FullWidthSection
      style={{
        backgroundColor: "rgb(81,81,81)",
      }}>
      <CentralSection>
        <div
          className={styles.container}
          style={{ flexDirection: props.footerFlexDirection }}>
          <FooterTile
            header={"Contact"}
            text={"(604) 723-5351 \n info@heliosolar.com"}
          />
          <FooterTile
            style={{ maxWidth: props.footerTextMaxWidth }}
            header="About"
            text="Helio solar is a new solar intallation company started by the
              owners after working for a number of years at one of the biggest
              solar companies in Canada. All of our staff are certified NABCEP
              solar PV associates, and we staff a registered electrician on
              every job."
          />
          <FooterTile
            style={{
              justifyContent: "flex-end",
              height: "100%",
              padding: "0",
            }}>
            <img
              style={{ width: "13rem", alignSelf: "center" }}
              src={light_logo}
              alt="company logo"
            />
          </FooterTile>
        </div>
      </CentralSection>
      <div
        style={{
          width: "100%",
          fontSize: "0.9rem",
          display: "flex",
          justifyContent: "center",
          color: "grey",
          marginBottom: "1rem",
        }}>
        <div>&copy;Copyright Lataritech 2022</div>
      </div>
    </FullWidthSection>
  );
};

const FooterTile = (props) => {
  let newText =
    props.text &&
    String(props.text)
      .split("\n")
      .map((str) => <div>{str}</div>);

  return (
    <div className={styles.item} style={props.style}>
      {props.children}
      <div className={styles.itemHeader}>{props.header}</div>
      <div className={styles.itemText}>{newText}</div>
    </div>
  );
};

export default Footer;
