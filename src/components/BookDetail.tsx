import moment from "moment";
import Image from "next/image";
import styles from "src/styles/components/BookDetail.module.css";
import { KakaoBookInfo } from "src/types";

export default function BookDetail({ book }: { book: KakaoBookInfo }) {
  console.log(moment(book.datetime));

  return (
    <div>
      <Image src={book.thumbnail} width={110} height={160} alt={""} />
      <div>
        <h2>{book.title}</h2>
        <p>
          {book.authors.join(",")} <small>지음</small> |{" "}
          {book.translators.join(",")} <small>옮김</small>
        </p>
        <div>* * * * * 3.45점</div>
        <p>평가 120 · 리뷰 52</p>
        <p>출판: {book.publisher}</p>
        <p>출간일: {book.datetime.split("T")[0]}</p>
        <p>ISBN: {book.isbn.split(" ")[1]}</p>
      </div>
    </div>
  );
}
