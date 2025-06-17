import React from "react";
import styles from "@/components/destination/destination.module.css";

export default function PlanetWishListItem({ name, onRemove, thumbnail }) {
  return (
    <div className={styles.wishlistItem}>
      <img className={styles.wishlistItemThumbnail} src={thumbnail} alt="" />
      <b>{name.toUpperCase()}</b>
      <button onClick={onRemove}>remove</button>
    </div>
  );
}
