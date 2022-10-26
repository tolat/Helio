import styles from "./SpanButton.module.css";

const SpanButton = (props) => {
  let color = props.color;
  return (
    <div
      className={`${styles.spanButton} pointer-hover`}
      style={{
        backgroundColor: color,
        color: "white",
      }}>
      <div>{props.children}</div>
    </div>
  );
};

export default SpanButton;
