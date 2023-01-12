import styles from "src/styles/Detail.module.css";
import BookDetail from "src/components/BookDetail";
import { useBookStore } from "src/store";

export default function Detail() {
  const { bookInfo } = useBookStore();

  return (
    <div className={styles.content}>
      <BookDetail book={bookInfo} />

      <div>책 상태 / 리뷰</div>

      <div>책 소개</div>

      <div>다른사람들 리뷰</div>
    </div>
  );
}
