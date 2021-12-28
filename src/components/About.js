import React from "react";
import styles from "./About.module.css";

export default function About() {
  return (
    <main className={styles.about}>
      <h2 className={styles.header}>About</h2>
      <p className={styles.texts}>
        I am a frontend developer who loves people build things. Helping people
        to have a great experience while navigating a website is a must.
        Providing an accessibility also one of my concern to create equality for
        everybody.
      </p>
    </main>
  );
}
