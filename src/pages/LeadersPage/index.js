import React from "react";
import styles from "./LeadersPage.module.scss";
import Button from "../../components/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useWheelActions, useWheelState } from "../../contexts/wheel-context";

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

const firstNameFormatting = (string) => {
  if (string) return string[0] + "*".repeat(1) + string.slice(-1);
  else return "";
};

const lastNameFormatting = (string) => {
  if (string) return string[0] + string[1] + "*".repeat(3) + string.slice(-2);
  else return "";
};

const containsObject = (obj, list) => {
  for (let i = 0; i < list.length; i++) {
    if (list[i].telegram_id === obj.telegram_id) {
      return true;
    }
  }
  return false;
};

const LeadersPage = () => {
  const { show } = useParams();
  const { getUsers } = useWheelActions();
  const { users, user } = useWheelState();
  const [isRules, setIsRules] = React.useState(Boolean(parseInt(show)));
  const [userList, setUserList] = React.useState([]);
  const [isOnList, setIsOnList] = React.useState(true);
  const navigate = useNavigate();

  React.useEffect(() => {
    getUsers();
  }, []);

  React.useEffect(() => {
    getUsers();
  }, [isRules]);

  React.useEffect(() => {
    if (users.length) {
      const list = users.slice(0, 10);
      setUserList(
        list.sort((a, b) => parseFloat(b.points) - parseFloat(a.points))
      );
      list.length > 1
        ? setIsOnList(containsObject(user, list))
        : setIsOnList(false);
    }
  }, [users]);

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
            {userList.length > 1 &&
              userList.map((item, index) => (
                <div
                  className={`${styles.leader} ${
                    isOnList &&
                    item.telegram_id === user.telegram_id &&
                    styles.you
                  }`}
                  key={index}
                >
                  <span>
                    {index + 1}. {firstNameFormatting(item.telegram_username)}
                  </span>
                  <span>{item.points}</span>
                </div>
              ))}
            {!isOnList && (
              <div className={styles.you}>
                <span>
                  {userList.length > 1
                    ? userList.length + 1
                    : 1 + ". " + user.telegram_username}
                </span>
                <span>{user.points}</span>
              </div>
            )}
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
