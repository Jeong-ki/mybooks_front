import styles from "src/styles/Home.module.css";
import Bookmark from "src/public/image/bookmark.png";
import BookmarkClick from "src/public/image/bookmark_clicked.png";
import Image from "next/image";
import { useState } from "react";

export default function BookmarkFilterBtn() {
  const [filterBookmark, setFilterBookmark] = useState(false);

  const onClickFilterBookmark = () => {
    setFilterBookmark((val) => !val);
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
