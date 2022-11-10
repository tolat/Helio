import styles from "./ProductTile.module.css";

const ProductTile = (props) => {
  return (
    <div className={styles.tile} style={props.style}>
      <div className={styles.imgContainer}>
        <div className={styles.header}>{props.header}</div>
        <img
          className={styles.image}
          src={props.img}
          alt="string inverter icon"
        />
      </div>
      <div className={styles.text} style={props.textStyles}>
        {props.text}
      </div>
    </div>
  );
};

export default ProductTile;
