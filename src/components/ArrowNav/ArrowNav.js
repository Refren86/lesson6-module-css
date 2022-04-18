import React from "react";

import styles from "./ArrowNav.module.css";

import arrowTop from "../../utils/icons/arrow_top.svg";

export const ArrowNav = () => {
  return (
    <div className={styles.arrow}>
      <a href="#header">
        <img src={arrowTop} alt="arrow_top" />
      </a>
    </div>
  );
};
