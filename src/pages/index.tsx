import styles from "src/styles/Home.module.css";
import { useEffect, useState } from "react";
import CheckType from "src/components/CheckType";
import TableList from "src/components/TableList";
import CardList from "src/components/CardList";
import { CardDummy } from "src/constant";
import { useBookStore } from "src/store";
import SelectFilterBox from "src/components/SelectFilterBox";

export default function Home() {
  const [showingType, setShowingType] = useState("gallery");
  const { filteredBookList, setBooks }: any = useBookStore();
  useEffect(() => {
    if (CardDummy.length > 0) {
      setBooks(CardDummy);
    }
  }, [setBooks]);

  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <div className={styles.content_top}>
          <h2>총 23권</h2>
          <CheckType type={showingType} setType={setShowingType} />
          <SelectFilterBox />
        </div>
        {showingType === "gallery" ? (
          <CardList bookList={filteredBookList} />
        ) : (
          <TableList bookList={filteredBookList} />
        )}
      </div>
    </div>
  );
}
