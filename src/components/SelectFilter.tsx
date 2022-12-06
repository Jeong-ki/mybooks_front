import Image from "next/image";
import React, { useRef, useState } from "react";
import styles from "src/styles/components/SelectFilter.module.css";
import Arrow from "src/public/image/arrow.png";
import ArrowClicked from "src/public/image/arrow_clicked.png";
import useOutsideClick from "src/hooks/useOutsideClick";
import { useFilterStore } from "src/store";

interface Ifilter {
  title: string;
  items: { id: number | string; text: string }[];
}

interface AvgFilter {
  average: number;
  setAverage: (average: number) => number;
}

export default function SelectFilter({ title, items }: Ifilter) {
  const { average, setAverage }: AvgFilter = useFilterStore() as AvgFilter;

  const [clicked, setClicked] = useState(false);
  const [selected, setSelected] = useState(title);

  const listRef = useRef<HTMLUListElement>(null);

  const onClickSelect = () => {
    setClicked((val) => !val);
  };

  const onClickItem = (item: { id: number | string; text: string }) => {
    console.log(item);
    setSelected(item.text);
    setClicked(false);

    // MEMO: 분기처리 어떻게 할지 고민 ... 필터에선 총 네가지 분기 필요
    if (typeof item.id === "number") setAverage(item.id);
  };

  const filterName = () => {
    if (title === "평점") return styles.list_avg;
    if (title === "총 평점") return styles.list_period;
    if (title === "상태") return styles.list_status;
    if (title === "기간") return styles.list_period;
    return "";
  };

  useOutsideClick({ ref: listRef, clicked, setClicked });

  return (
    <div className={styles.cont_select}>
      <button
        className={`${styles.btn_select} ${
          title !== selected ? styles.on : ""
        }`}
        onClick={onClickSelect}
      >
        {selected}
        <Image
          src={title !== selected ? ArrowClicked : Arrow}
          alt=""
          width={8}
          height={4}
        />
      </button>
      {clicked && (
        <ul className={`${styles.list_member} ${filterName()}`} ref={listRef}>
          <li>
            <button
              type="button"
              onClick={() => onClickItem({ id: 0, text: title })}
            >
              없음
            </button>
          </li>
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
