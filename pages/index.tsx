import Image from "next/image";
import styles from "../styles/Home.module.css";
import Bookmark from "../public/image/bookmark.png";
import BookmarkClick from "../public/image/bookmark_clicked.png";
import SelectFilter from "../components/SelectFilter";
import { useEffect, useState } from "react";
import { FilterList } from "../constant";
import CheckType from "../components/CheckType";
import CardList from "../components/CardList";
import TableList from "../components/TableList";
import { CardDummy } from "../constant";
import axios from "axios";

export default function Home() {
  const [showingType, setShowingType] = useState("gallery");
  const [filterBookmark, setFilterBookmark] = useState(false);

  const onClickFilterBookmark = () => {
    setFilterBookmark((val) => !val);
  };

  // 도서 검색 api 호출 테스트
  useEffect(() => {
    axios({
      method: "get",
      url: "https://dapi.kakao.com/v3/search/book?target=authors", // title, authors
      params: { query: "기시미 이치로" },
      headers: {
        Authorization: "KakaoAK b81da854d6d00141d339e6978e8a2245",
        "Content-Type": "application/json;charset=UTF-8",
      },
    }).then((res) => console.log(res.data.documents));
  }, []);

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
