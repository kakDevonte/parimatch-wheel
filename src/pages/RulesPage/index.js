import React from "react";
import styles from "./RulesPage.module.scss";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const RulesPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.root}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title} data-text="На удачу">
            На удачу
          </h1>
          <h2 className={styles.subTitle} data-text="правила">
            правила
          </h2>
        </div>
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
        <div className={styles.buttons}>
          <Button title={"Играть"} onClick={() => navigate("/")} />
          <Button title={"Лидеры"} onClick={() => navigate("/leaders")} />
        </div>
      </div>
    </>
  );
};

export default RulesPage;
