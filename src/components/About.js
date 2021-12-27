import React from "react";
import styles from "./About.module.css";

export default function About() {
  return (
    <main className={styles.about}>
      <h1 className={styles.header}>About</h1>
      <p className={styles.texts}>
        I am a frontend developer who loves people build things. Helping people
        to have a great experience while navigating a website is a must.
        Providing an accessibility also one of my concern to create that equal
        for everybody.
      </p>
    </main>
  );
}
