import Image from "next/image";
import styles from "src/styles/components/CardList.module.css";
import Bookmark from "src/public/image/bookmark.png";
import BookmarkClick from "src/public/image/bookmark_clicked.png";
import Star1 from "src/public/image/star_1.png";
import Star2 from "src/public/image/star_2.png";
import Star3 from "src/public/image/star_3.png";
import Star4 from "src/public/image/star_4.png";
import Star5 from "src/public/image/star_5.png";
import { BookList } from "src/types";

export default function CardList({ data }: BookList) {
  const statusName = (name: string) => {
    if (name === "읽은 책") return styles.read;
    if (name === "읽는 중") return styles.reading;
    return styles.wanted;
  };

  const Stars = [Star1, Star2, Star3, Star4, Star5];

  return (
    <div className={styles.content_inner}>
      {data.length > 0
        ? data.map((item) => (
            <div className={styles.card} key={item.created}>
              <div className={styles.book}>
                <Image
                  src={item.thumbnail}
                  width={85}
                  height={120}
                  alt="책"
                  priority={true}
                />
              </div>
              <div className={styles.card_data}>
                <div>
                  <h3>{item.title}</h3>
                </div>
                <button type="button">
                  <Image
                    src={item.bookmark ? BookmarkClick : Bookmark}
                    alt=""
                    width={15}
                    height={15}
                  />
                </button>
                <div>
                  <div className={styles.rating}>
                    평점:&nbsp;
                    <Image
                      src={Stars[item.myRating - 1]}
                      alt=""
                      width={14 * item.myRating}
                      height={14}
                    />
                  </div>
                  <p className={styles.avgRating}>총 평점: {item.avgRating}</p>
                </div>
                <div
                  className={[styles.card_info, statusName(item.status)].join(
                    " "
                  )}
                >
                  {item.status}
                </div>
                <p className={styles.created}>2022년 10월 20일</p>
              </div>
            </div>
          ))
        : null}
    </div>
  );
}
