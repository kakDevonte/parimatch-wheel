import React from "react";
import { Wheel } from "../Wheel";
import styles from "./Home.module.scss";
import MainButton from "../MainButton";
import Button from "../Button";
import Result from "../Result";
import { useNavigate } from "react-router-dom";

const data = [
  {
    id: "freeBat",
    title: "О, СЧАСТЛИВЧИК!",
    subTittle:
      "Мы сами почти не верим, что это произошло. Ты выиграл фрибет на 200р. Наш менеджер свяжется с тобой, чтобы уточнить детали личного счета.",
    view: "Продолжай играть, кажется, тебе очень везёт!",
    int: 100,
  },
  {
    id: "ВТОРОЙ ШАНС",
    title: "ВТОРОЙ ШАНС",
    subTittle:
      "В этот раз баллов ты не заработал, но получаешь дополнительную попытку! Давай ещё разок?",
    view: "+1 ПОПЫТКА",
    int: 1000,
  },
  {
    id: "+100",
    title: "НЕ ИМЕЙ 100 ДРУЗЕЙ, А ИМЕЙ…",
    subTittle:
      "Даже не знаем, что лучше: 100 друзей или 100 баллов. Продолжаем!",
    view: "+100 БАЛЛОВ",
    int: 1000,
  },
  {
    id: "+50",
    title: "ИДЕАЛЬНЫЙ БАЛАНС",
    subTittle:
      "Стакан наполовину полон? Ты получаешь 50 баллов, а это ровно половина от максимума. Круто, крути дальше!",
    view: "+50 БАЛЛОВ",
    int: 1000,
  },
  {
    id: "+10",
    title: "В ДЕСЯТКУ!",
    subTittle: "Понемногу пробиваемся в лидеры топа. Так держать!",
    view: "+10 БАЛЛОВ",
    int: 5000,
  },
  {
    id: "+5",
    title: "ДАЙ ПЯТЬ",
    subTittle:
      "Неплохо, а, главное, результативно – ты набираешь 5 баллов. Дай пять!",
    view: "+5 БАЛЛОВ",
    int: 5000,
  },
  {
    id: "+0",
    title: "ПУСТЫШКА",
    subTittle: "Попытка хорошая, но баллов, увы, не принесла. Попробуем снова?",
    view: "+0 БАЛЛОВ",
    int: 5000,
  },
  {
    id: "-10",
    title: "ОЙ-ОЙ",
    subTittle:
      "Немного не повезло, фортуна отвернулась от тебя. Чем же ты ей насолил?",
    view: "–10 БАЛЛОВ",
    int: 5000,
  },
];

const win = {
  id: "+10",
  title: "В ДЕСЯТКУ!",
  subTittle: "Понемногу пробиваемся в лидеры топа. Так держать!",
  view: "+10 БАЛЛОВ",
  int: 5000,
};

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

export const Home = () => {
  const [prizeNumber, setPrizeNumber] = React.useState(0);
  const [mustSpin, setMustSpin] = React.useState(false);
  const [showWin, setShowWin] = React.useState(false);
  const [isMount, setIsMount] = React.useState(false);
  const [result, setResult] = React.useState(data[0]);
  const divRef = React.useRef(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    setIsMount(true);
  }, []);

  React.useEffect(() => {
    if (isMount && !mustSpin) {
      setShowWin(true);
      setResult(randomByArrayWithChances(data));
      console.log(result);
    }
  }, [mustSpin]);

  const handleSpinClick = () => {
    setShowWin(false);
    setMustSpin(true);
  };
  //!showWin && isMount
  return (
    <div className={styles.root} ref={divRef}>
      {!showWin ? (
        <h1 className={styles.title} data-text="На удачу">
          На удачу
        </h1>
      ) : (
        <div className={styles.titleContainer}>
          <h1 className={styles.titleResult}>{result.title}</h1>
          <p className={styles.subTittle}>{result.subTittle}</p>
        </div>
      )}
      {!showWin ? (
        <div className={styles.wheelBox}>
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={data}
            onStopSpinning={() => {
              setMustSpin(false);
            }}
          />
        </div>
      ) : (
        <div className={styles.resultContainer}>
          <h1 className={styles.result} data-text={result.view}>
            {result.view}
          </h1>
        </div>
      )}
      <div className={styles.buttons}>
        <span>5 попыток</span>
        <MainButton onClick={handleSpinClick} disabled={mustSpin} />
        <div className={styles.container}>
          <Button title={"Правила"} onClick={() => navigate("/rules")} />
          <Button title={"Лидеры"} onClick={() => navigate("/leaders")} />
        </div>
      </div>
    </div>
  );
};
