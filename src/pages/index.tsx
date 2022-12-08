import styles from "src/styles/Home.module.css";
import { useState } from "react";
import { FilterList } from "src/constant";
import SelectFilter from "src/components/SelectFilter";
import CheckType from "src/components/CheckType";
import TableList from "src/components/TableList";
import CardList from "src/components/CardList";
import BookmarkFilterBtn from "src/components/BookmarkFilterBtn";
import { CardDummy } from "src/constant";
import { useFilterStore } from "src/store";

export default function Home() {
  const [showingType, setShowingType] = useState("gallery");

  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <div className={styles.content_top}>
          <h2>총 23권</h2>
          <CheckType type={showingType} setType={setShowingType} />
          <div className={styles.wrapper_filter}>
            <div className={styles.filter_box}>
              <SelectFilter title="평점" items={FilterList.myRating} />
              <SelectFilter title="총 평점" items={FilterList.avgRating} />
              <SelectFilter title="상태" items={FilterList.status} />
              <SelectFilter title="기간" items={FilterList.period} />
              <BookmarkFilterBtn />
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
