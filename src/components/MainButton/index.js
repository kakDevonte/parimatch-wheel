import React from "react";
import styles from "./MainButton.module.scss";

const MainButton = ({ onClick, disabled }) => {
  return (
    <div
      className={`${styles.root} ${disabled ? styles.disabledButton : ""}`}
      onClick={onClick}
    >
      <div
        className={`${styles.header} ${disabled ? styles.disabledButton : ""}`}
      >
        <p>Крутить</p>
      </div>
    </div>
  );
};

export default MainButton;
