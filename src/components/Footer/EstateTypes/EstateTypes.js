import React from "react";
import { Link } from "react-router-dom";

import styles from "./EstateTypes.module.css";

export const EstateTypes = () => {
  return (
    <div className={styles.typesContainer}>
      <h4 className={styles.typesHeading}>Type:</h4>

      <div className={styles.housingLinks}>
        <Link to="/">Apartments</Link>
        <Link to="/">Penthouses</Link>
        <Link to="/">Townhouses</Link>
        <Link to="/">Commercial</Link>
        <Link to="/">Bungalows</Link>
        <Link to="/">Duplexes</Link>
        <Link to="/">Villas</Link>
      </div>
    </div>
  );
};
