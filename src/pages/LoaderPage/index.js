import React from "react";
import styles from "./LoaderPage.module.scss";
import { useNavigate } from "react-router-dom";
import loader from "../../assets/loader.png";

const randomIntFromInterval = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const LoaderPage = () => {
  const [uploadOrDownloadCount, setUploadOrDownloadCount] = React.useState(10);
  const navigate = useNavigate();
  React.useEffect(() => {
    const timer = setInterval(() => {
      setUploadOrDownloadCount((beforeValue) =>
        beforeValue >= 100
          ? navigate("/home")
          : beforeValue + randomIntFromInterval(5, 15)
      );
    }, 100);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={styles.root}>
      <h1 className={styles.title} data-text="На удачу">
        На удачу
      </h1>
      <span className={styles.loader}>{`${Math.round(
        uploadOrDownloadCount >= 100 ? 100 : uploadOrDownloadCount
      )}%`}</span>
      <img className={styles.img} src={loader} />
    </div>
  );
};

export default LoaderPage;
