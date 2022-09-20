import React from "react";
import { Wheel } from "../Wheel";
import styles from "./Home.module.scss";
import MainButton from "../MainButton";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import { useWheelActions, useWheelState } from "../../contexts/wheel-context";

const data = [
  {
    id: "freeBat",
    title: "О, СЧАСТЛИВЧИК!",
    subTittle:
      "Мы сами почти не верим, что это произошло. Ты выиграл фрибет на 200р. Наш менеджер свяжется с тобой, чтобы уточнить детали личного счета.",
    view: "Продолжай играть, кажется, тебе очень везёт!",
    int: 100,
    result: 0,
  },
  {
    id: "ВТОРОЙ ШАНС",
    title: "ВТОРОЙ ШАНС",
    subTittle:
      "В этот раз баллов ты не заработал, но получаешь дополнительную попытку! Давай ещё разок?",
    view: "+1 ПОПЫТКА",
    int: 1000,
    result: 0,
  },
  {
    id: "+100",
    title: "НЕ ИМЕЙ 100 ДРУЗЕЙ, А ИМЕЙ…",
    subTittle:
      "Даже не знаем, что лучше: 100 друзей или 100 баллов. Продолжаем!",
    view: "+100 БАЛЛОВ",
    int: 1000,
    result: 100,
  },
  {
    id: "+50",
    title: "ИДЕАЛЬНЫЙ БАЛАНС",
    subTittle:
      "Стакан наполовину полон? Ты получаешь 50 баллов, а это ровно половина от максимума. Круто, крути дальше!",
    view: "+50 БАЛЛОВ",
    int: 1000,
    result: 50,
  },
  {
    id: "+10",
    title: "В ДЕСЯТКУ!",
    subTittle: "Понемногу пробиваемся в лидеры топа. Так держать!",
    view: "+10 БАЛЛОВ",
    int: 5000,
    result: 10,
  },
  {
    id: "+5",
    title: "ДАЙ ПЯТЬ",
    subTittle:
      "Неплохо, а, главное, результативно – ты набираешь 5 баллов. Дай пять!",
    view: "+5 БАЛЛОВ",
    int: 5000,
    result: 5,
  },
  {
    id: "+0",
    title: "ПУСТЫШКА",
    subTittle: "Попытка хорошая, но баллов, увы, не принесла. Попробуем снова?",
    view: "+0 БАЛЛОВ",
    int: 5000,
    result: 0,
  },
  {
    id: "-10",
    title: "ОЙ-ОЙ",
    subTittle:
      "Немного не повезло, фортуна отвернулась от тебя. Чем же ты ей насолил?",
    view: "–10 БАЛЛОВ",
    int: 5000,
    result: -10,
  },
];

const randomByArrayWithChances = (data) => {
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += data[i].int;
  }

  let rand = Math.floor(Math.random() * sum);

  let i = 0;
  for (let s = data[0].int; s <= rand; s += data[i].int) {
    i++;
  }

  return data[i];
};

const tryWord = (tryCount) => {
  switch (tryCount) {
    case 4: {
      return "4 поптыки";
    }
    case 3: {
      return "3 поптыки";
    }
    case 2: {
      return "2 поптыки";
    }
    case 1: {
      return "1 попытка";
    }
    case 0: {
      return "0 попыток";
    }
    default: {
      return tryCount + " попыток";
    }
  }
};

export const Home = () => {
  const [prizeNumber, setPrizeNumber] = React.useState(0);
  const [mustSpin, setMustSpin] = React.useState(false);
  const [showWin, setShowWin] = React.useState(false);
  const [isMount, setIsMount] = React.useState(false);
  const [result, setResult] = React.useState(data[0]);
  const divRef = React.useRef(null);
  const navigate = useNavigate();
  const { user } = useWheelState();
  const { changeUser } = useWheelActions();

  React.useEffect(() => {
    setIsMount(true);
  }, []);

  React.useEffect(() => {
    if (isMount && !mustSpin) {
      setShowWin(true);
      const currResult = randomByArrayWithChances(data);
      setResult(currResult);

      changeUser({
        telegram_id: user.telegram_id,
        telegram_username: user.telegram_username,
        points: user.points + currResult.result,
        tryCount:
          currResult.title === "ВТОРОЙ ШАНС"
            ? user.tryCount
            : user.tryCount - 1,
      });
    }
  }, [mustSpin]);

  const handleSpinClick = () => {
    setShowWin(false);
    setMustSpin(true);
  };

  return (
    <div className={`${styles.root} ${showWin ? styles.bg : ""}`} ref={divRef}>
      <div className={styles.titleContainer}>
        {!showWin ? (
          <div>
            <h1 className={styles.title} data-text="На удачу">
              На удачу
            </h1>
            {/*<p className={`${styles.plug} ${styles.subTittle}`}>*/}
            {/*  asdadasdfdhgdhgdhfdfhgddfdghfd dfdfgdf fg fdghd hfdh dhgfd*/}
            {/*</p>*/}
          </div>
        ) : (
          <div className={styles.titleContainer}>
            <h1 className={styles.titleResult}>{result.title}</h1>
            <p className={styles.subTittle}>{result.subTittle}</p>
          </div>
        )}
      </div>
      <div className={styles.wheelBox}>
        {!showWin ? (
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={data}
            onStopSpinning={() => {
              setMustSpin(false);
            }}
          />
        ) : (
          <h1 className={styles.result} data-text={result.view}>
            {result.view}
          </h1>
        )}
      </div>
      <div className={styles.buttons}>
        <span>{tryWord(user.tryCount)}</span>
        <MainButton
          onClick={handleSpinClick}
          disabled={mustSpin || !user.tryCount}
        />
        <div className={styles.container}>
          <Button title={"Правила"} onClick={() => navigate(`/info/${1}`)} />
          <Button title={"Лидеры"} onClick={() => navigate(`/info/${0}`)} />
        </div>
      </div>
    </div>
  );
};
