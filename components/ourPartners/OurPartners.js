import { partners } from "@/data/partners";
import styles from "./OurPartners.module.css";
export const OurPartners = () => {
  // TASK - React 1 week 1
  // Create the "Our Crew section"
  // Use the descriptions provided in /app/about_us/README.md
  // Use the pictures from /public/crew
  // Some inspiration ideas found in /data/inspiration_about_us
  return (
    <div className={styles.container}>
      <h2 className={styles.h2Style}>Our Partners </h2>
      <p className={styles.p}>
        We collaborate with these multinational companies and also with the
        local companies to help them grow bigger{" "}
      </p>
      <ul className={styles.gridView}>
        {partners.map((partner) => (
          <li key={partner.id} className={styles.imgContainer}>
            <img src={partner.logo} alt="" className={styles.image} />
          </li>
        ))}
      </ul>
    </div>
  );
};
