import React from "react";

import footerLogo from "../../utils/images/logo_white.svg";

import styles from "./Footer.module.css";
import { FooterNav } from "./FooterNav/FooterNav";
import { Contacts } from "./Contacts/Contacts";
import { EstateTypes } from "./EstateTypes/EstateTypes";
import { FollowUs } from "./FollowUs/FollowUs";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerHeading}>
          <div>
            <img src={footerLogo} alt="logo" />
          </div>

          <h3 className={styles.footerTitle}>
            <span>THE BEST</span> REAL ESTATE IN SPAIN
          </h3>
        </div>

        <hr />

        <FooterNav />

        <div className={styles.footerMain}>
          <Contacts />

          <EstateTypes />

          <FollowUs />
        </div>

        <div className={styles.copyrights}>
          <p>
            The company "WTG Spain" specializes in the investment and sale of
            real estate in Spain, and the provision of legal and consulting
            services.
          </p>
          <p>
            All rights reserved. "WTG Spain" - The Best Real Estate in Spain. ©
            Copyright 2007 - 2020.
          </p>
        </div>
      </div>
    </footer>
  );
};
