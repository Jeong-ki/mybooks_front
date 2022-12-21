import styles from "src/styles/Detail.module.css";
import { useRouter } from "next/router";
import BookDetail from "src/components/BookDetail";
import { KakaoBookInfo } from "src/types";

/**
 * @todo 내 DB에 저장
 */

export default function Detail() {
  const { book, id } = useRouter().query;
  const bookInfo = JSON.parse(book as string);

  console.log(book, id);

  return (
    <div className={styles.content}>
      <BookDetail book={bookInfo} />

      <div>책 상태 / 리뷰</div>

      <div>책 소개</div>

      <div>다른사람들 리뷰</div>
    </div>
  );
}
