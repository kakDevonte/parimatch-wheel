import React from "react";
import styles from "./LeadersPage.module.scss";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const leaders = [
  {
    id: 0,
    firstName: "Александр",
    lastName: "Хатюшин",
    result: "100",
  },
  {
    id: 1,
    firstName: "Александр",
    lastName: "Хатюшин",
    result: "100",
  },
  {
    id: 2,
    firstName: "Александр",
    lastName: "Хатюшин",
    result: "100",
  },
  {
    id: 3,
    firstName: "Александр",
    lastName: "Хатюшин",
    result: "100",
  },
  {
    id: 4,
    firstName: "Александр",
    lastName: "Хатюшин",
    result: "100",
  },
  {
    id: 5,
    firstName: "Александр",
    lastName: "Хатюшин",
    result: "100",
  },
  {
    id: 6,
    firstName: "Александр",
    lastName: "Хатюшин",
    result: "100",
  },
  {
    id: 7,
    firstName: "Александр",
    lastName: "Хатюшин",
    result: "100",
  },
  {
    id: 8,
    firstName: "Александр",
    lastName: "Хатюшин",
    result: "100",
  },
  {
    id: 9,
    firstName: "Александр",
    lastName: "Хатюшин",
    result: "100",
  },
  {
    id: 10,
    firstName: "Александр",
    lastName: "Хатюшин",
    result: "100",
  },
];
const LeadersPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.root}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title} data-text="На удачу">
            На удачу
          </h1>
          <h2 className={styles.subTitle} data-text="Лидеры">
            Лидеры
          </h2>
        </div>
        <div className={styles.rules}>
          {leaders.slice(0, 10).map((item, index) => (
            <div className={styles.leader}>
              <span>{index + 1}.</span>
              <span>{item.firstName + " " + item.lastName}</span>
              <span>{item.result}</span>
            </div>
          ))}
          <div className={styles.you}>
            <span>11.</span>
            <span>{leaders[0].firstName + " " + leaders[0].lastName}</span>
            <span>{leaders[0].result}</span>
          </div>
        </div>
        <div className={styles.buttons}>
          <Button title={"Играть"} onClick={() => navigate("/")} />
          <Button title={"Правила"} onClick={() => navigate("/rules")} />
        </div>
      </div>
    </>
  );
};

export default LeadersPage;
