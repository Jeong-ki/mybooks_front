import Image from "next/image";
import styles from "../styles/components/CardList.module.css";
import Bookmark from "../public/image/bookmark.png";
import BookmarkClick from "../public/image/bookmark_clicked.png";
import { AlgorithmList } from "../types";

export default function CardList({ data }: AlgorithmList) {
  return (
    <div className={styles.content_inner}>
      {data.length > 0 &&
        data.map((item) => (
          <div className={styles.card} key={item.created}>
            <h3>{item.title}</h3>
            <button type="button">
              <Image
                src={item.bookmark ? BookmarkClick : Bookmark}
                alt=""
                width={15}
                height={15}
              />
            </button>
            <p>{item.description}</p>
            <div className={styles.card_info}>
              <div>
                <span
                  className={
                    item.status === "Done" ? styles.done : styles.doing
                  }
                >
                  {item.status}
                </span>
                <span className={styles.category}>{item.category}</span>
              </div>
              Lv.{item.level}
            </div>
          </div>
        ))}
    </div>
  );
}
