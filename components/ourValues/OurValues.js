import { values } from "@/data/values";
import styles from "./OurValues.module.css";

export const OurValues = () => {
  // TASK - React 1 week 1
  // Create the "Our Values" section
  // Use the descriptions provided in /app/about_us/README.md
  // Some inspiration ideas found in /data/inspiration_about_us
  return (
    <div>
      <h2 className={styles.h2Style}>Rules to live by </h2>
      <div className={styles.gridView}>
        {values.map((value) => (
          <div key={value.id}>
            <h2 className={styles.heading}>0{value.id}</h2>
            <p className={styles.title}>{value.title}</p>
            <p className={styles.desc}>{value.desc}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};
