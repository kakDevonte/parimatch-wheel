import React from "react";
import styles from "./Result.module.scss";

const win = {
  id: "+10",
  title: "В ДЕСЯТКУ!",
  subTittle: "Понемногу пробиваемся в лидеры топа. Так держать!",
  view: "+10 БАЛЛОВ",
  int: 5000,
};

const Result = ({ height }) => {
  console.log(height);
  return (
    <>
      <div className={styles.root}>
        <h1 className={styles.titleResult}>{win.title}</h1>
        <p className={styles.subTittle}>{win.subTittle}</p>
      </div>
      <div className={styles.resultContainer} style={{ height: height + "px" }}>
        <h1 className={styles.result} data-text={win.view}>
          {win.view}
        </h1>
      </div>
    </>
  );
};

export default Result;
