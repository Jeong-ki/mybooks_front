import React from "react";
import styles from "../styles/Search.module.css";

export default function Search() {
  return (
    <div className={styles.content}>
      <h2>검색 결과 23건</h2>
      <div className={styles.book}>
        <img src="https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F1467038" />
        <div className={styles.book_info}>
          <div>
            <h3>미움받을 용기</h3>
            <p className={styles.author}>기시미 이치로, 고가 후미타케 저</p>
          </div>
          <p>
            평점 * * * 4.39 <small>평가 2,129, 리뷰 120</small>
          </p>
          <p className={styles.description}>
            인간은 변할 수 있고, 누구나 행복해 질 수 있다. 단 그러기 위해서는
            ‘용기’가 필요하다고 말한 철학자가 있다. 바로 프로이트, 융과 함께
            ‘심리학의 3대 거장’으로 일컬어지고 있는 알프레드 아들러다.
            『미움받을 용기』는 아들러 심리학에 관한 일본의 1인자 철학자 기시미
            이치로와 베스트셀러 작가인 고가 후미타케의 저서로, 아들러의 심리학을
            ‘대화체’로 쉽고 맛깔나게 정리하고 있다. 아들러 심리학을 공부한
            철학자와 세상에 부정적이고 열등감 많은
          </p>
        </div>
      </div>
    </div>
  );
}
