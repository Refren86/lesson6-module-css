import React from "react";

import vector from "../../../utils/images/corner_vector.svg";
import contact from "../../../utils/images/contact.svg";

import styles from "./ContactUsBanner.module.css";

export const ContactUsBanner = () => {
  return (
    <section className={styles.contactUs}>
      <div>
        <img src={vector} alt="vector" />
      </div>

      <div className={styles.content}>
        <div className={styles.companyName}>
          <div className={styles.horizontalLine}></div>

          <h3>WTG SPAIN</h3>
        </div>

        <h1 className={styles.question}>
          Do you need <span>some help</span>?
        </h1>

        <p>Contact us right now and our team will do everything to help you.</p>

        <button className={styles.contactUsBtn}>Contact us</button>
      </div>

      <div className={styles.contactImg}>
        <img src={contact} alt="contact_picture" />
      </div>
    </section>
  );
};
