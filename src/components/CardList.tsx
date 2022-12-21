import Image from "next/image";
import styles from "src/styles/components/CardList.module.css";
import Bookmark from "src/public/image/bookmark.png";
import BookmarkClick from "src/public/image/bookmark_clicked.png";
import { BookList } from "src/types";
import { StarImgList } from "src/constant";

export default function CardList({ bookList }: { bookList: BookList[] }) {
  const statusName = (name: string) => {
    if (name === "읽은 책") return styles.read;
    if (name === "읽는 중") return styles.reading;
    return styles.wanted;
  };

  return (
    <div className={styles.content_inner}>
      {bookList.length > 0
        ? bookList.map((item: BookList) => (
            <div className={styles.card} key={item.id}>
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
                <div className={styles.rating}>
                  평점:&nbsp;
                  <Image
                    src={StarImgList[item.myRating - 1]}
                    alt=""
                    width={14 * item.myRating}
                    height={14}
                  />
                </div>
                <p className={styles.avgRating}>총 평점: {item.avgRating}</p>
                <div className={styles.date_status}>
                  <div
                    className={[styles.card_info, statusName(item.status)].join(
                      " "
                    )}
                  >
                    {item.status}
                  </div>
                  <p className={styles.created}>{item.created}</p>
                </div>
              </div>
            </div>
          ))
        : null}
    </div>
  );
}
