import styles from "./SmallBox.module.css";
const SmallBox = ({ color, clickHandler, deleteButtonHandler, index }) => {
  return (
    <>
      <div>
        <div>
          <button
            className={styles.smallbox}
            style={{ background: color }}
            onClick={() => {
              clickHandler(color);
            }}
          ></button>
        </div>

        <div className={styles.del}>
          <button
            onClick={() => {
              deleteButtonHandler(index);
            }}
            style={{ background: color }}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};
export default SmallBox;
