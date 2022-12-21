import Image from "next/image";
import React, { useRef, useState } from "react";
import styles from "src/styles/components/SelectFilter.module.css";
import Arrow from "src/public/image/arrow.png";
import ArrowClicked from "src/public/image/arrow_clicked.png";
import useOutsideClick from "src/hooks/useOutsideClick";
import { useBookStore } from "src/store";
import { Ifilter, StoreFilterBooks } from "src/types";

export default function SelectFilter({ title, type, items }: Ifilter) {
  const { filterBooks } = useBookStore() as StoreFilterBooks;

  const [isFocus, setIsFocus] = useState(false);
  const [selected, setSelected] = useState({ id: 0, text: "없음" });

  const listRef = useRef<HTMLUListElement>(null);

  const onClickSelect = () => {
    setIsFocus((val) => !val);
  };

  const onClickItem = (item: { id: number; text: string }) => {
    setSelected(item);
    setIsFocus(false);

    filterBooks({ type, item });
  };

  const filterName = () => {
    if (title === "평점") return styles.list_avg;
    if (title === "총 평점") return styles.list_period;
    if (title === "상태") return styles.list_status;
    if (title === "기간") return styles.list_period;
    return "";
  };

  useOutsideClick({ ref: listRef, isFocus, setIsFocus });

  return (
    <div className={styles.cont_select}>
      <button
        className={`${styles.btn_select} ${selected.id ? styles.on : ""}`}
        onClick={onClickSelect}
      >
        {selected.id ? selected.text : title}
        <Image
          src={selected.id ? ArrowClicked : Arrow}
          alt=""
          width={8}
          height={4}
        />
      </button>
      {isFocus && (
        <ul className={`${styles.list_member} ${filterName()}`} ref={listRef}>
          {items.map((item, i) => (
            <li key={i}>
              <button type="button" onClick={() => onClickItem(item)}>
                {item.text}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
