import React from "react";
import styles from "./Loading.module.css";
import sandClock from "../../assets/loading.png";

function Loading() {
  return (
    <div className={styles.loadingBackground}>
      <img className={styles.sandClock} src={sandClock} alt="Loading..." />
    </div>
  );
}

export default Loading;
