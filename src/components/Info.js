import React from "react";
import styles from "./Info.module.css";
import ProfilePicture from "../assets/Profile_Picture.png";
import EmailLogo from "../assets/Email-logo.png";

export default function Info() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img
          className={styles.avatar}
          src={ProfilePicture}
          alt="Tasha Syarifah"
        />
      </header>
      <div className={styles.bio}>
        <h1 className={styles.name}>Tasha Syarifah</h1>
        <p className={styles.title}>Frontend Developer</p>
        <p className={styles.small}>website</p>
        <div className={styles.contacts}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.links} ${styles.mr}`}
            href="mailto:tashasyarifah@outlook.com"
          >
            <img className={styles.icons} src={EmailLogo} alt="Send an email" />{" "}
            Email
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={styles.links}
            href="https://www.linkedin.com/in/tashasyarifah/"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
