import React from "react";
import { Wheel } from "../Wheel";
import styles from './Home.module.scss';

const data = [
  { label: 10 },
  { label: 100 },
  { label: 150 },
  { label: 200 },
  { label: 250 },
  { label: 400 },
  { label: 750 },
  { label: "JACKPOT" },
];

export const Home = () => {
  const [prizeNumber, setPrizeNumber] = React.useState(0);
  const [mustSpin, setMustSpin] = React.useState(false);
  const [showWin, setShowWin] = React.useState(false);
  const [isMount, setIsMount] = React.useState(false);

  React.useEffect(() => {
    setIsMount(true);
  }, []);

  React.useEffect(() => {
  }, [mustSpin]);

  const handleSpinClick = () => {
    setMustSpin(true);
  };

  return (
      <div className={styles.root}>
        <h1 className={styles.title} data-text="На удачу">На удачу</h1>
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
          <button onClick={handleSpinClick}>Жми</button>
      </div>
  );
};
