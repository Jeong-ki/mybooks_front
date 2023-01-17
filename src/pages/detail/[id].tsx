import styles from "src/styles/Detail.module.css";
import BookDetail from "src/components/BookDetail";
import { useBookStore } from "src/store";
import MyReview from "src/components/MyReview";

export default function Detail() {
  const { bookInfo } = useBookStore();

  return (
    <div className={styles.content}>
      <BookDetail book={bookInfo} />
      <MyReview />

      <div>책 소개</div>

      <div>다른사람들 리뷰</div>
    </div>
  );
}
