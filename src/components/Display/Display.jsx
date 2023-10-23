import styles from "./Display.module.css";

const Display = ({ style }) => {
  return (
    <>
      <div className={styles.display}>
        <div className={styles.underDisplay} style={style}></div>
      </div>
    </>
  );
};
export default Display;
