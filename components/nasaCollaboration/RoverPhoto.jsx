import React from "react";
import styles from "./rover.module.css";

export default function RoverPhoto({ src, date, roverName }) {
  return (
    <div>
      <h2>{roverName}</h2>
      <p>Date {date}</p>
      <img className={styles.nasaPicOfTheDayImg} src={src} alt={roverName} />
    </div>
  );
}
