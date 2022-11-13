import Image from "next/image";
import React, { useState } from "react";
import styles from "../styles/components/SelectFilter.module.css";
import Arrow from "../public/image/arrow.png";

interface Ifilter {
  title: string;
  items: string[];
}

export default function SelectFilter({ title, items }: Ifilter) {
  const [clicked, setClicked] = useState(false);
  const [selected, setSelected] = useState(title);

  const onClickSelect = () => {
    setClicked(true);
  };

  const onClickItem = (item: string) => {
    setSelected(item);
    setClicked(false);
  };

  return (
    <div className={styles.cont_select}>
      <button
        className={`${styles.btn_select} ${styles}`}
        onClick={onClickSelect}
      >
        {selected}
        <Image src={Arrow} alt="" width={9} height={4} />
      </button>
      {clicked && (
        <ul className={styles.list_member}>
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
