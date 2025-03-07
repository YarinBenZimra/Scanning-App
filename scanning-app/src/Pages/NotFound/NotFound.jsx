import React from "react";
import styles from "./NotFound.module.css";
import notFoundImage from "../../../src/assets/NotFound/404.png";
export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <h1>404 Not Found</h1>
      <img src={notFoundImage} alt={"Not Found"} />
      <p>Oops! Error.</p>
      <a className={styles.homeLink} href="/">
        Go Back Home
      </a>
    </div>
  );
}
