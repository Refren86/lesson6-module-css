import React from "react";

import heart from "../../../utils/icons/heart.svg";
import mail from "../../../utils/icons/mail_white.svg";
import phone from "../../../utils/icons/phone_white.svg";
import whatsUp from "../../../utils/icons/whatsUp_white.svg";
import englishFlag from "../../../utils/icons/united_kingdom.svg";

import styles from './Contacts.module.css'

export const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <div className={styles.wrapper}>
        <div className={styles.contactsBlocks}>
          <div className={styles.contactsItem}>
            <div className={styles.contactsIcon}>
              <img src={mail} alt="mail_icon" />
            </div>

            <div className={styles.contactsDetails}>sales@wtgspain.com</div>
          </div>

          <div className={styles.contactsItem}>
            <div className={styles.contactsIcon}>
              <img src={phone} alt="phone_icon" />
            </div>

            <div className={styles.contactsDetails}>+34 965 020784</div>
          </div>
          <div className={styles.contactsItem}>
            <div className={`${styles.contactsIcon} ${styles.whatsUpIcon}`}>
              <img src={whatsUp} alt="whatsUp_icon" />
            </div>

            <div className={styles.contactsDetails}>WhatsApp</div>
          </div>
        </div>

        <div className={styles.language}>
          <div className={styles.like}>
            <img src={heart} alt="heart" />
          </div>

          <div className={styles.flag}>
            <img src={englishFlag} alt="language_flag" />
          </div>
        </div>
      </div>
    </div>
  );
};
