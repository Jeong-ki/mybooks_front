import React, { useState } from "react";
import styles from "src/styles/components/layout/Header.module.css";
import Image from "next/image";
import Search from "src/public/image/search.png";
import { useRouter } from "next/router";

export default function Header() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const routeSearch = () => {
    if (search.length > 0) {
      router.push({
        pathname: "/search",
        query: { value: search },
      });
    }
  };

  const onChangeSearch = (e: React.ChangeEvent) => {
    setSearch((e.target as HTMLInputElement).value);
  };

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
          onChange={onChangeSearch}
        />
        <label htmlFor="search" className="screen_out">
          도서 검색
        </label>
        <button onClick={routeSearch}>
          <Image src={Search} alt="" width={18} height={18} />
        </button>
      </div>
      <div className={styles.menu}>
        <button className={styles.btn1}>로그인</button>
        <button className={styles.btn2}>회원가입</button>
      </div>
    </header>
  );
}
