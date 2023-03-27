import React from "react";
import styles from "./spinner.module.css";

/**
 * Source - https://loading.io/css/
 */
function Spinner() {
  return (
    <div className={styles.spinner}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export { Spinner };
