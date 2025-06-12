"use client";

import { usePathname } from "next/navigation";
import styles from "./Footer.module.css";
import Link from "next/link";

import SocialMediaItem from "../SocialMediaItem";
const socialMedia = [
  {
    id: 0,
    name: "Facebook",
    siteAddress: "https://facebook.com",
    imgUrl: "/socialMedia/facebook.png",
  },
  {
    id: 1,
    name: "Instagram",
    siteAddress: "https://instagram.com",
    imgUrl: "/socialMedia/instagram.png",
  },
  {
    id: 2,
    name: "Tiktok",
    siteAddress: "https://tiktok.com",
    imgUrl: "/socialMedia/tiktok.webp",
  },
  {
    id: 3,
    name: "Linkdin",
    siteAddress: "https://linkdin.com",
    imgUrl: "/socialMedia/linkdin.webp",
  },
];
const pages = [
  {
    name: "About Us",
    path: "/about_us",
  },
  {
    name: "Destination",
    path: "/destination",
  },
  {
    name: "Nasa Collaboration",
    path: "/nasa_collaboration",
  },
];
const PageItem = ({ path, name }) => {
  return (
    <li>
      <Link href={path}> {name}</Link>
    </li>
  );
};
export const Footer = () => {
  const path = usePathname().split("?")[0];

  return (
    <footer className={path !== "/" ? styles.footer : styles.hidden}>
      <div className={styles.footerDescription}>
        <h3>Galactica</h3>
        <p>
          Explore the universe and beyond. Your journey to the stars starts
          here.
        </p>
        <p>&copy; 2024 Galactica. All rights reserved.</p>
      </div>
      {/* TASK - React 1 week 2 */}
      {/* Create a new List for the Pages */}
      {/* We need to use the <Link /> component here */}
      {/* <div className={styles.pages}>
        <h3>Pages</h3>
        <ul>
          <li> <Link/> </li>
          ...
        </ul>
        
      </div> */}
      {/* i use pageitem here */}
      <div className={styles.pages}>
        <h3>Pages</h3>
        <ul>
          {pages.map((page) => (
            <PageItem name={page.name} path={page.path} key={page.name} />
          ))}
        </ul>
      </div>
      {/* Docs for the Link: https://nextjs.org/docs/pages/api-reference/components/link */}

      {/* TASK - React 1 week 1 */}
      {/* Add a new list item for LINKEDIN */}

      <div className={styles.footerLinks}>
        <h3>Follow us</h3>
        {/* added linkedn and used map method */}
        <ul className={styles.footerList}>
          {socialMedia.map((item) => (
            <SocialMediaItem
              url={item.siteAddress}
              key={item.id}
              title={item.name}
              icon={item.imgUrl}
            />
          ))}
          {/* TASK - React 1 week 2 */}
          {/* Create a <SocialMediaItem /> component and replace all of the list items! */}
          {/* it should accept the following props */}
          {/* url, title, icon */}
          {/* For the icons, you can download 1-2 social media icons for testing and put it in the /public/socialmedia/ folder */}
        </ul>
      </div>
    </footer>
  );
};
