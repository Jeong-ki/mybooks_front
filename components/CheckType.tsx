import Image from "next/image";
import styles from "../styles/components/CheckType.module.css";
import Category from "../public/image/category.png";
import CategoryClick from "../public/image/category_click.png";
import Table from "../public/image/table.png";
import TableClick from "../public/image/table_click.png";
import { Dispatch, SetStateAction } from "react";

interface Itype {
  type: string;
  setType: Dispatch<SetStateAction<string>>;
}

export default function CheckType({ type, setType }: Itype) {
  const onClickType = (type: string) => {
    setType(type);
  };
  return (
    <div className={styles.showing_type}>
      <button
        className={type === "gallery" ? styles.clicked : ""}
        onClick={() => onClickType("gallery")}
      >
        <Image
          src={type === "gallery" ? CategoryClick : Category}
          alt=""
          width={14}
          height={14}
        />
        <span>갤러리</span>
      </button>
      <button
        className={type === "table" ? styles.clicked : ""}
        onClick={() => onClickType("table")}
      >
        <Image
          src={type === "table" ? TableClick : Table}
          alt=""
          width={14}
          height={14}
        />
        <span>표</span>
      </button>
    </div>
  );
}
