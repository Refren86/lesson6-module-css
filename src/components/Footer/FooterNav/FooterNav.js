import React from "react";
import { Link } from "react-router-dom";

import styles from "./FooterNav.module.css";

export const FooterNav = () => {
  return (
    <div className={styles.navContainer}>
      <nav className={styles.footerNav}>
        <Link to="/">All cities</Link>
        <Link to="/">Blog</Link>
        <Link to="/">Video</Link>
        <Link to="/">Contacts</Link>
      </nav>
    </div>
  );
};
