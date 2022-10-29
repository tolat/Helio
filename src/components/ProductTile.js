import styles from "./ProductTile.module.css";

const ProductTile = (props) => {
  return (
    <div className={styles.tile} style={props.style}>
      <div className={styles.header}>{props.header}</div>
      <img
        className={styles.image}
        src={props.img}
        alt="string inverter icon"
      />
      <div className={styles.text}>{props.text}</div>
    </div>
  );
};

export default ProductTile;
