import React, { useState } from "react";
import styles from "src/styles/components/layout/Header.module.css";
import Image from "next/image";
import Search from "src/public/image/search.png";
import { useRouter } from "next/router";
import Link from "next/link";

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

  const onKeyDownEnter = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") routeSearch();
  };

  return (
    <header className={styles.header}>
      <ul className={styles.nav}>
        <li>
          <Link href="/">
            <h1>독서랍</h1>
          </Link>
        </li>
        {/* <li className={styles.item}>
          <Link href="/">홈</Link>
        </li>
        <li className={styles.item}>
          <Link href="/">독서통계</Link>
        </li>
        <li className={styles.item}>
          <a href="#">어워즈</a>
        </li> */}
      </ul>
      <div className={styles.search}>
        <input
          type="text"
          id="search"
          placeholder="책 또는 작가를 입력하세요."
          onChange={onChangeSearch}
          onKeyDown={onKeyDownEnter}
        />
        <label htmlFor="search" className="screen_out">
          도서 검색
        </label>
        <button onClick={routeSearch}>
          <Image src={Search} alt="" width={18} height={18} />
        </button>
      </div>
      <div className={styles.menu}>
        <button className={styles.btn1}>회원가입</button>
        <button className={styles.btn2}>로그인</button>
      </div>
    </header>
  );
}
