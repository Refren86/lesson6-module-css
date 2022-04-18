import React from "react";

import phoneBlue from "../../../utils/icons/phone_blue.svg";
import emailBlue from "../../../utils/icons/mail_blue.svg";
import whatsUpGreen from "../../../utils/icons/whatsUp_green.svg";
import viberPurple from "../../../utils/icons/viber_purple.svg";
import fbBlue from "../../../utils/icons/facebook_messanger_blue.svg";
import telegramBlue from "../../../utils/icons/telegram.svg";

import styles from "./ContactDetails.module.css";

export const ContactDetails = () => {
  return (
    <section>
      <div className={styles.barrierLine}></div>

      <div className={styles.contactsWrapper}>
        <div className={styles.phoneBlock}>
          <h3 className={styles.contactsHeading}>Phone</h3>

          <div className={styles.credentialsBlock}>
            <div>
              <img src={phoneBlue} alt="phone_icon" />
            </div>

            <p>+34 965 020784</p>
          </div>
        </div>

        <div className={styles.officeBlock}>
          <h3 className={styles.contactsHeading}>Office in Spain</h3>

          <p>
            Centro Comercial Playa Flamenca C / Niagara, 63 Local 60/PB, first
            floor, 03189 - Orihuela Costa (Alicante), Spain
          </p>
        </div>

        <div className={styles.emailBlock}>
          <h3 className={styles.contactsHeading}>E-mail</h3>

          <div className={styles.credentialsBlock}>
            <div className={styles.credentialsIcon}>
              <img src={emailBlue} alt="phone_icon" />
            </div>

            <p>sales@wtgspain.com</p>
          </div>
        </div>
      </div>

      <div className={styles.barrierLine}></div>

      <div className={styles.socialsWrapper}>
        <h3 className={styles.socialsHeading}>We are online</h3>

        <div className={styles.socialsBlocks}>
          <div className={styles.socialsBlock}>
            <div>
              <img src={whatsUpGreen} alt="whatsUp_icon" />
            </div>

            <p>WhatsApp</p>
          </div>
          <div className={styles.socialsBlock}>
            <div>
              <img src={viberPurple} alt="viber_icon" />
            </div>

            <p>Viber</p>
          </div>
          <div className={styles.socialsBlock}>
            <div>
              <img src={fbBlue} alt="facebook_icon" />
            </div>

            <p>Messenger</p>
          </div>
          <div className={styles.socialsBlock}>
            <div>
              <img src={telegramBlue} alt="telegram_icon" />
            </div>

            <p>Telegram</p>
          </div>
        </div>
      </div>
    </section>
  );
};
