import React from "react";

export default function SocialMediaItem({ url, title, icon }) {
  return (
    <li
      style={{
        display: "flex",
        gap: 5,
        alignItems: "center",
      }}
    >
      <img src={icon} style={{ height: 15, width: 15 }} />
      <a href={url}>{title}</a>
    </li>
  );
}
