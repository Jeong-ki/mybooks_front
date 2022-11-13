import React from "react";
import styles from "../../styles/components/layout/Header.module.css";
import Image from "next/image";
import Search from "../../public/image/search.png";

export default function Header() {
  return (
    <header className={styles.header}>
      <ul className={styles.nav}>
        <li>
          <h1>Memorithm</h1>
        </li>
        <li className={styles.item}>
          <a href="#">Home</a>
        </li>
        <li className={styles.item}>
          <a href="#">Run Code</a>
        </li>
        <li>
          <div className={styles.search}>
            <input type="text" id="search" placeholder="Title or Category" />
            <label htmlFor="search">
              <Image src={Search} alt="" width={18} height={18} />
            </label>
          </div>
        </li>
      </ul>
      <div className={styles.menu}>
        <button className={styles.btn1}>SignUp</button>
        <button className={styles.btn2}>Login</button>
      </div>
    </header>
  );
}
