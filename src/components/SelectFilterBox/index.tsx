import styles from "src/styles/components/SelectFilterBox.module.css";
import { FilterList } from "src/constant";
import BookmarkFilterBtn from "./BookmarkFilterBtn";
import SelectFilter from "./SelectFilter";

export default function SelectFilterBox() {
  return (
    <div className={styles.wrapper_filter}>
      <div className={styles.filter_box}>
        <SelectFilter
          title="평점"
          type="myRating"
          items={FilterList.myRating}
        />
        <SelectFilter
          title="총 평점"
          type="avgRating"
          items={FilterList.avgRating}
        />
        <SelectFilter title="상태" type="status" items={FilterList.status} />
        <SelectFilter title="기간" type="created" items={FilterList.created} />
        <BookmarkFilterBtn />
      </div>
    </div>
  );
}
