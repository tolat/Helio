import styles from "./GeneralInput.module.css";

const GeneralInput = (props) => {
  return (
    <div className={styles.container} style={props.style}>
      <div className={styles.label}>{props.label}</div>
      <input
        className={styles.input}
        type={props.type}
        placeholder={props.placeholder}
        style={props.inputStyle}
      />
      {props.children}
    </div>
  );
};

export default GeneralInput;
