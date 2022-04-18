import React from "react";
import { Rating } from "@mui/material";

import smartphoneWhite from "../../../utils/icons/smartphone_white.svg";
import mailWhite from "../../../utils/icons/mail_white.svg";
import markWhite from "../../../utils/icons/mark_white.svg";

import styles from "./Contacts.module.css";

export const Contacts = () => {
  return (
    <div className={styles.contactsContainer}>
      <h4 className={styles.contactsHeading}>Contacts:</h4>

      <div className={styles.contactsBlock}>
        <div className={styles.contactsItem}>
          <div>
            <img src={smartphoneWhite} alt="phone_icon" />
          </div>

          <p>+34 (965) 020 - 784</p>
        </div>

        <div className={styles.contactsItem}>
          <div>
            <img src={mailWhite} alt="phone_icon" />
          </div>

          <p>sales@wtgspain.com</p>
        </div>

        <div className={styles.contactsItem}>
          <div>
            <img src={markWhite} alt="phone_icon" />
          </div>

          <p>
            Centro Comercial «Playa Flamenca» C/ Niagara, 63 Local 60/PB, first
            floor, 03189 - Orihuela Costa (Alicante), Spain
          </p>
        </div>

        <div className={styles.contactsItem}>
          <p>Rating 4.9/5: </p>

          <div>
            <Rating
              className={styles.startRating}
              value={4.9}
              precision={0.5}
              size="small"
              readOnly
            />
          </div>

          <p>820 votes</p>
        </div>
      </div>
    </div>
  );
};
