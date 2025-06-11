import { crews } from "@/data/crews";
import styles from "./OurCrew.module.css";

export const OurCrew = () => {
  // TASK - React 1 week 1
  // Create the "Our Crew section"
  // Use the descriptions provided in /app/about_us/README.md
  // Use the pictures from /public/crew
  // Some inspiration ideas found in /data/inspiration_about_us
  return (
    <div className={styles.container}>
      <h2 className={styles.h2Style}>Who We Are </h2>
      <p>
        We are team of the teams for the development of the website and many
        more and this is what we do the most in the effective way
      </p>
      <div className={styles.flexView}>
        {crews.map((crew) => (
          <div key={crew.id} className={styles.card}>
            <div className={styles.imgContainer}>
              <img src={crew.image} alt="" className={styles.image} />
            </div>

            <p className={styles.title}>{crew.name}</p>
            <p className={styles.desc}>{crew.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
