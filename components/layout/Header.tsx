import React from "react";
import styles from "../../styles/components/layout/Header.module.css";
import Image from "next/image";
import Search from "../../public/image/search.png";

export default function Header() {
  return (
    <header className={styles.header}>
      <ul className={styles.nav}>
        <li>
          <h1>MyBooks</h1>
        </li>
        <li className={styles.item}>
          <a href="#">홈</a>
        </li>
        <li className={styles.item}>
          <a href="#">독서통계</a>
        </li>
        <li className={styles.item}>
          <a href="#">어워즈</a>
        </li>
      </ul>
      <div className={styles.search}>
        <input
          type="text"
          id="search"
          placeholder="책 또는 작가를 입력하세요."
        />
        <label htmlFor="search">
          <Image src={Search} alt="" width={18} height={18} />
        </label>
      </div>
      <div className={styles.menu}>
        <button className={styles.btn1}>로그인</button>
        <button className={styles.btn2}>회원가입</button>
      </div>
    </header>
  );
}
