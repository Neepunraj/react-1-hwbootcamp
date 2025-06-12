import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

import classNames from "classnames";

export default function NavItem({ title, link, isActive, index }) {
  return (
    <li
      className={classNames(styles.navbarLinks, {
        [styles.isLinkActive]: isActive,
      })}
    >
      <Link href={link}>
        <b>0{index + 1}</b> {title}
      </Link>
    </li>
  );
}
