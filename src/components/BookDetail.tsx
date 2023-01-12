import moment from "moment";
import Image from "next/image";
import styles from "src/styles/components/BookDetail.module.css";
import { KakaoBookInfo } from "src/types";
import { StarImgList } from "src/constant";

export default function BookDetail({ book }: { book: KakaoBookInfo }) {
  return (
    <div className={styles.book_detail}>
      <div className={styles.thumbnail_wrapper}>
        <Image src={book.thumbnail} width={120} height={174} alt={""} />
      </div>
      <div className={styles.book_info}>
        <h2>{book.title}</h2>
        <p className={styles.author}>
          {book.authors.join(",")} <small>지음</small> ·{" "}
          {book.translators.join(",")} <small>옮김</small>
        </p>
        <div className={styles.grade}>
          <Image src={StarImgList[2]} alt="" width={18 * 3} height={18} /> 3.45
          <p className={styles.total}>평가 120 · 리뷰 52</p>
        </div>
        <div className={styles.detail_info}>
          <p>
            <strong>출판:</strong> {book.publisher}
          </p>
          <p>
            <strong>출간일:</strong>{" "}
            {moment(book.datetime).format("YYYY.MM.DD")}
          </p>
          <p>
            <strong>ISBN:</strong> {book.isbn.split(" ")[1]}
          </p>
        </div>
      </div>
    </div>
  );
}
