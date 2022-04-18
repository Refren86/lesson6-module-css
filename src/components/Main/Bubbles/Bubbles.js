import React from "react";

import plane1 from "../../../utils/icons/plane_1.svg";
import plane2 from "../../../utils/icons/plane_2.svg";
import plane3 from "../../../utils/icons/plane_3.svg";
import plane4 from "../../../utils/icons/plane_4.svg";

import styles from "./Bubbles.module.css";

export const Bubbles = () => {
  return (
    <div>
      <div className={styles.bubble1}>
        <img className={styles.plane1} src={plane1} alt="ellipse" />
      </div>

      <div className={styles.bubble2}>
        <img className={styles.plane2} src={plane2} alt="ellipse" />
      </div>

      <div className={styles.bubble3}>
        <img className={styles.plane3} src={plane3} alt="ellipse" />
      </div>

      <div className={styles.bubble4}>
        <img className={styles.plane4} src={plane3} alt="ellipse" />
      </div>

      <div className={styles.bubble5}>
        <img className={styles.plane5} src={plane4} alt="ellipse" />
      </div>
    </div>
  );
};
