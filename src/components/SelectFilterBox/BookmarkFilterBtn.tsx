import styles from "src/styles/components/BookmarkFilterBtn.module.css";
import Bookmark from "src/public/image/bookmark.png";
import BookmarkClick from "src/public/image/bookmark_clicked.png";
import Image from "next/image";
import { useState } from "react";
import { useBookStore } from "src/store";

export default function BookmarkFilterBtn() {
  const { filterBooks } = useBookStore();
  const [filterBookmark, setFilterBookmark] = useState(false);

  const onClickFilterBookmark = () => {
    setFilterBookmark((val) => !val);
    filterBooks({ type: "bookmark", item: !filterBookmark });
  };

  return (
    <button
      className={`${styles.bookmark} ${filterBookmark ? styles.on : ""}`}
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
  );
}
