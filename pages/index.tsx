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
          <h2>총 23권</h2>
          <CheckType type={showingType} setType={setShowingType} />
          <div className={styles.wrapper_filter}>
            <div className={styles.filter_box}>
              <SelectFilter title="내 평점" items={FilterList.category} />
              <SelectFilter title="분류" items={FilterList.level} />
              <SelectFilter title="상태" items={FilterList.language} />
              <SelectFilter title="기간" items={FilterList.status} />
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
                즐겨찾기
              </button>
            </div>
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
