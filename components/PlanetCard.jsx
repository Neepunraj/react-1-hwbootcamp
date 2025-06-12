import React from "react";
import styles from "@/components/destination/destination.module.css";

export default function PlanetCard({
  name,
  description,
  thumbnail,
  isPlanetSelected,
  onAddOrRemovePlanet,
  selectedPlanets,
}) {
  return (
    <div className={styles.planetCard}>
      <img className={styles.planetThumbnail} src={thumbnail} alt={name} />
      <div className={styles.planetDescription}>
        <h2>
          {name}{" "}
          {isPlanetSelected && selectedPlanets.includes(name)
            ? "- SELECTED"
            : ""}
        </h2>
        <p>{description}</p>
      </div>
      <button className="roundButton" onClick={onAddOrRemovePlanet}>
        {isPlanetSelected && selectedPlanets.includes(name)
          ? "REMOVE"
          : "ADD PLANET"}
      </button>
    </div>
  );
}
