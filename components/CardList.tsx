import Image from "next/image";
import styles from "../styles/components/CardList.module.css";
import Bookmark from "../public/image/bookmark.png";
import BookmarkClick from "../public/image/bookmark_clicked.png";
import { AlgorithmList } from "../types";

export default function CardList({ data }: AlgorithmList) {
  const statusName = (name: string) => {
    if (name === "읽은 책") return styles.read;
    if (name === "읽는 중") return styles.reading;
    return styles.wanted;
  };

  const ratingCount = (num: number) => {
    let arr = [];
    for (let i = 0; i < num; i++) {
      arr.push(<Image src={BookmarkClick} alt="" width={15} height={15} />);
    }

    return arr;
  };

  return (
    <div className={styles.content_inner}>
      {data.length > 0 &&
        data.map((item) => (
          <div className={styles.card} key={item.created}>
            <div className={styles.book}>
              <img src="https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F1467038" />
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
                  {ratingCount(item.myRating)}
                </div>
                <p className={styles.avgRating}>총 평점: {item.avgRating}</p>
              </div>
              {/* <div className={`${styles.card_info} ${statusName(item.status)}`}> */}
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
        ))}
    </div>
  );
}
