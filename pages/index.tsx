import Image from "next/image";
import styles from "../styles/Home.module.css";
import Bookmark from "../public/image/bookmark.png";
import BookmarkClick from "../public/image/bookmark_clicked.png";
import SelectFilter from "../components/SelectFilter";
import { useState } from "react";
import { FilterList } from "../constant";
import CheckType from "../components/CheckType";
import CardList from "../components/CardList";
import TableList from "../components/TableList";
import { CardDummy } from "../constant";

export default function Home() {
  const [showingType, setShowingType] = useState("gallery");
  const [filterBookmark, setFilterBookmark] = useState(false);

  const onClickFilterBookmark = () => {
    setFilterBookmark((val) => !val);
  };

  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <div className={styles.content_top}>
          <h2>Total 23</h2>
          <CheckType type={showingType} setType={setShowingType} />
          <div className={styles.wrapper_filter}>
            <div className={styles.filter_box}>
              <SelectFilter title="Category" items={FilterList.category} />
              <SelectFilter title="Level" items={FilterList.level} />
              <SelectFilter title="Language" items={FilterList.language} />
              <SelectFilter title="Status" items={FilterList.status} />
              <button
                className={`
                ${styles.bookmark} 
                ${filterBookmark ? styles.on : ""}`}
                onClick={onClickFilterBookmark}
              >
                <Image
                  src={filterBookmark ? BookmarkClick : Bookmark}
                  alt=""
                  width={13}
                  height={13}
                />
                Bookmark
              </button>
            </div>
            <button className={styles.add}>Add</button>
          </div>
        </div>
        {showingType === "gallery" ? (
          <CardList data={CardDummy} />
        ) : (
          <TableList data={CardDummy} />
        )}
      </div>
    </div>
  );
}
