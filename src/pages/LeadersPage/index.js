import React from "react";
import styles from "./LeadersPage.module.scss";
import Button from "../../components/Button";
import { useNavigate, useParams } from "react-router-dom";

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
  const { show } = useParams();
  const [isRules, setIsRules] = React.useState(Boolean(parseInt(show)));
  const navigate = useNavigate();

  return (
    <div className={styles.root}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title} data-text="На удачу">
          На удачу
        </h1>
        <h2
          className={styles.subTitle}
          data-text={isRules ? "Правила" : "Лидеры"}
        >
          {isRules ? "Правила" : "Лидеры"}
        </h2>
      </div>
      <div className={styles.container}>
        {!isRules ? (
          <div className={styles.leaders}>
            {leaders.slice(0, 10).map((item, index) => (
              <div className={styles.leader}>
                <span>
                  {index + 1}. {item.firstName + " " + item.lastName}
                </span>
                <span>{item.result}</span>
              </div>
            ))}
            <div className={styles.you}>
              <span>
                11. {leaders[0].firstName + " " + leaders[0].lastName}
              </span>
              <span>{leaders[0].result}</span>
            </div>
          </div>
        ) : (
          <div className={styles.rules}>
            <p>Давай проверим, благосклонна ли к тебе фортуна?</p>
            <p>
              Крути колесо удачи, каждый день у тебя будет 5 попыток чтобы
              получить баллы.
            </p>
            <p>
              Чтобы получить больше попыток возвращайся в бота, нажимай кнопку
              «Больше попыток» и отправляй ссылку друзьям. Как только твой друг
              зайдет в игру – ты получишь уведомления и новые жизни.
            </p>
            <p>
              Пятерка лучших игроков получит сертификаты Giftery и еще пять
              получат фрибеты. Ну что, крутим, любимец фортуны?
            </p>
          </div>
        )}
      </div>
      <div className={styles.buttons}>
        <Button title={"Играть"} onClick={() => navigate("/home")} />
        <Button
          title={isRules ? "Лидеры" : "Правила"}
          onClick={() => setIsRules(!isRules)}
        />
      </div>
    </div>
  );
};

export default LeadersPage;
