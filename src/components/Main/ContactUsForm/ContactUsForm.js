import React from "react";

import { Form } from "./Form/Form";

import map from "../../../utils/images/map.png";

import styles from "./ContactUsForm.module.css";

export const ContactUsForm = () => {
  return (
    <section className={styles.contactMap}>
      <p className={styles.formIntro}>
        We are always in touch and will be happy to resolve any of your
        questions.
      </p>

      <div className={styles.formContainer}>
        <div className={styles.mapLocation}>
          <img src={map} alt="location_map" />
        </div>

        <div className={styles.formBlock}>
          <h2>Contact us</h2>

          <Form />

          <div className={styles.policyLink}>
            <a href="/">Privacy policy</a>
          </div>
        </div>
      </div>
    </section>
  );
};
