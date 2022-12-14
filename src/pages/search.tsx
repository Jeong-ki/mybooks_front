import { useRouter } from "next/router";
import React from "react";
import styles from "src/styles/Search.module.css";
import comStyles from "src/styles/Common.module.css";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchBookList } from "src/api";
import BookList from "src/components/BookList";
import Loading from "src/components/common/Loading";

export default function Search() {
  const router = useRouter();
  const bookName = router.query.value as string;

  const { data, status, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery(
      [bookName],
      ({ pageParam = 1 }) => fetchBookList(bookName, pageParam),
      {
        getNextPageParam: (lastPage) =>
          !lastPage.idEnd ? lastPage.nextPage : undefined,
      }
    );

  if (status === "loading") {
    return <Loading />;
  }
  if (status === "error") {
    return <div>Error...</div>;
  }

  return (
    <div className={styles.content}>
      <h2>
        {`"${bookName}"`} 검색 결과 {data.pages[0].total} 건
      </h2>
      <div className={styles.book_list}>
        {data?.pages.length > 0
          ? data?.pages.map((bookList, index) => (
              <BookList books={bookList.books} key={index} />
            ))
          : null}
      </div>

      <div>{isFetchingNextPage ? <Loading /> : null}</div>

      {hasNextPage ? (
        <div className={styles.wrap_btn}>
          <button
            className={styles.more_btn}
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage}
          >
            검색결과 더보기
          </button>
        </div>
      ) : null}
    </div>
  );
}
