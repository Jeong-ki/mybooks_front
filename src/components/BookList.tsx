import Image from "next/image";
import { KakaoBookInfo } from "src/types";
import styles from "src/styles/Search.module.css";

interface Books {
  books: KakaoBookInfo[];
}

export default function BookList({ books }: Books) {
  return (
    <>
      {books.length > 0
        ? books.map((book: KakaoBookInfo, index: number) => (
            <div key={book.isbn} className={styles.book}>
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
    </>
  );
}
