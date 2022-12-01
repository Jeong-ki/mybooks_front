import { useRouter } from "next/router";
import React from "react";
import styles from "src/styles/Search.module.css";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchBookList } from "src/api";
import BookList from "src/components/BookList";

export default function Search() {
  const router = useRouter();
  const bookName = router.query.value as string;

  const { data, status, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
    [bookName],
    ({ pageParam = 1 }) => fetchBookList(bookName, pageParam),
    {
      getNextPageParam: (lastPage) =>
        !lastPage.idEnd ? lastPage.nextPage : undefined,
    }
  );

  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (status === "error") {
    return <div>Error...</div>;
  }

  return (
    <div className={styles.content}>
      <h2>
        {`"${bookName}"`} 검색 결과 {data.pages[0].total} 건
      </h2>
      {data?.pages.length > 0
        ? data?.pages.map((bookList: any, index: number) => (
            <BookList books={bookList.books} key={index} />
          ))
        : null}
      <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
        더보기 버튼
      </button>
      {/* MEMO: 데이터 로딩 컴포넌트 구현 */}
      <div>{isFetchingNextPage ? "Fetching..." : null}</div>
    </div>
  );
}
