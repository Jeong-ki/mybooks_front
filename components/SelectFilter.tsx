import Image from "next/image";
import React, { useRef, useState } from "react";
import styles from "../styles/components/SelectFilter.module.css";
import Arrow from "../public/image/arrow.png";
import ArrowClicked from "../public/image/arrow_clicked.png";
import useOutsideClick from "../hooks/useOutsideClick";

interface Ifilter {
  title: string;
  items: string[];
}

export default function SelectFilter({ title, items }: Ifilter) {
  const [clicked, setClicked] = useState(false);
  const [selected, setSelected] = useState(title);

  const listRef = useRef<HTMLUListElement>(null);

  const onClickSelect = () => {
    setClicked((val) => !val);
  };

  const onClickItem = (item: string) => {
    setSelected(item);
    setClicked(false);
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
        <ul className={styles.list_member} ref={listRef}>
          <li>
            <button type="button" onClick={() => onClickItem(title)}>
              None
            </button>
          </li>
          {items.map((item, i) => (
            <li key={i}>
              <button type="button" onClick={() => onClickItem(item)}>
                {item}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
