import { useRouter } from "next/router";
import React from "react";
import styles from "src/styles/Search.module.css";
import { useQuery } from "@tanstack/react-query";
import { getSearchResult } from "src/api";
import Image from "next/image";

interface BookApiError {
  code: string;
  message: string;
}

export default function Search() {
  const router = useRouter();
  const { value } = router.query;
  console.log(router.query);
  const { status, data, error } = useQuery(["books"], () =>
    getSearchResult(value as string)
  );
  console.log("1", status);
  console.log("2", data);
  console.log("3", error);

  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (status === "error") {
    const err = error as BookApiError;
    return <div>Error: {err.message}</div>;
  }

  return (
    <div className={styles.content}>
      <h2>검색 결과 {data.length}건</h2>
      {data.length > 0
        ? data.map((book: any, index: number) => (
            <div key={book.isbn} className={styles.book}>
              <Image
                src={book.thumbnail}
                width={160}
                height={160}
                alt={`${index + 1}번째 책`}
              />
              <div className={styles.book_info}>
                <div>
                  <h3>{book.title}</h3>
                  <p className={styles.author}>{book.authors.join(", ")} 저</p>
                </div>
                <p>
                  평점 * * * 4.39 <small>평가 2,129, 리뷰 120</small>
                </p>
                <p className={styles.description}>{book.contents}</p>
              </div>
            </div>
          ))
        : null}
    </div>
  );
}
