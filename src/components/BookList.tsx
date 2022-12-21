import Image from "next/image";
import { KakaoBookInfo, StoreSetBookDetail } from "src/types";
import styles from "src/styles/Search.module.css";
import Link from "next/link";
import { useBookStore } from "src/store";

interface Books {
  books: KakaoBookInfo[];
}

export default function BookList({ books }: Books) {
  const { setBookDetail } = useBookStore() as StoreSetBookDetail;

  return (
    <>
      {books.length > 0
        ? books.map((book: KakaoBookInfo, index: number) => (
            <div key={book.isbn} className={styles.book}>
              {/* <Link
                href={`/detail/${encodeURIComponent(book.isbn.split(" ")[1])}`}
                className={styles.inner_book}
                onClick={() => setBookDetail(book)}
              > */}
              <Link
                href={{
                  pathname: "/detail/[id]",
                  query: { book: JSON.stringify(book) },
                }}
                as={`/detail/${encodeURIComponent(book.isbn.split(" ")[1])}`}
                className={styles.inner_book}
              >
                {book.thumbnail ? (
                  <Image
                    src={book.thumbnail}
                    width={110}
                    height={160}
                    alt={`${index + 1}번째 책`}
                  />
                ) : (
                  <div className={styles.none_thumbnail}></div>
                )}
                <div className={styles.book_info}>
                  <div>
                    <h3>{book.title}</h3>
                    <p className={styles.author}>
                      {book.authors.join(", ")} 저
                    </p>
                  </div>
                  <p>
                    평점 * * * 4.39 <small>평가 2,129, 리뷰 120</small>
                  </p>
                  <p className={styles.description}>{book.contents}</p>
                </div>
              </Link>
            </div>
          ))
        : null}
    </>
  );
}
