import React from "react";
import { Link } from "react-router-dom";

import logo from "../../../utils/images/logo_blue.svg";

import styles from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>

        <div className={styles.links}>
          <nav className={styles.navbar}>
            <select>
              <option value="">Cities</option>
            </select>

            <select>
              <option value="">Properties</option>
            </select>

            <Link to="/">Blog</Link>
            <Link to="/">Video</Link>
            <Link to="/">Contacts</Link>
          </nav>

          <div className={styles.authorization}>
            <Link to="/">Log in</Link>

            <Link to="/">Sign up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
