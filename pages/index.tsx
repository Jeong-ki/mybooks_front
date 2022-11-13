import Image from "next/image";
import styles from "../styles/Home.module.css";
import Category from "../public/image/category.png";
import CategoryClick from "../public/image/category_click.png";
import Table from "../public/image/table.png";
import TableClick from "../public/image/table_click.png";
import SelectFilter from "../components/SelectFilter";
import { useState } from "react";
import { Language } from "../constant";

export default function Home() {
  const [showingType, setShowingType] = useState("gallery");
  const onClickType = (type: string) => {
    setShowingType(type);
  };

  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <div className={styles.content_top}>
          <h2>Total 23</h2>
          <div className={styles.showing}>
            <div className={styles.showing_type}>
              <button
                className={showingType === "gallery" ? styles.clicked : ""}
                onClick={() => onClickType("gallery")}
              >
                <Image
                  src={showingType === "gallery" ? CategoryClick : Category}
                  alt=""
                  width={14}
                  height={14}
                />
                <span>Gallery</span>
              </button>
              <button
                className={showingType === "table" ? styles.clicked : ""}
                onClick={() => onClickType("table")}
              >
                <Image
                  src={showingType === "table" ? TableClick : Table}
                  alt=""
                  width={14}
                  height={14}
                />
                <span>Table</span>
              </button>
            </div>
            <button className={styles.add}>Add</button>
          </div>
          <div className={styles.filterBox}>
            <SelectFilter title="Category" items={Language} />
            <SelectFilter title="Level" items={Language} />
            <SelectFilter title="Language" items={Language} />
            <SelectFilter title="Status" items={Language} />
            <button>Bookmark</button>
          </div>
        </div>
        <div className={styles.content_inner}>
          <div className={styles.card}>
            <h3>cont1</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
              quaerat fugit. Esse, corporis alias dolorem minima, eos totam
              itaque numquam eaque amet at beatae mollitia qui, sequi labore
              eveniet maiores!
            </p>
          </div>
          <div className={styles.card}>
            <h3>cont2</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
              quaerat fugit. Esse, corporis alias dolorem minima, eos totam
              itaque numquam eaque amet at beatae mollitia qui, sequi labore
              eveniet maiores!
            </p>
          </div>
          <div className={styles.card}>
            <h3>cont3</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
              quaerat fugit. Esse, corporis alias dolorem minima, eos totam
              itaque numquam eaque amet at beatae mollitia qui, sequi labore
              eveniet maiores!
            </p>
          </div>
          <div className={styles.card}>
            <h3>cont4</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
              quaerat fugit. Esse, corporis alias dolorem minima, eos totam
              itaque numquam eaque amet at beatae mollitia qui, sequi labore
              eveniet maiores!
            </p>
          </div>
          <div className={styles.card}>
            <h3>cont5</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
              quaerat fugit. Esse, corporis alias dolorem minima, eos totam
              itaque numquam eaque amet at beatae mollitia qui, sequi labore
              eveniet maiores!
            </p>
          </div>
          <div className={styles.card}>
            <h3>cont6</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
              quaerat fugit. Esse, corporis alias dolorem minima, eos totam
              itaque numquam eaque amet at beatae mollitia qui, sequi labore
              eveniet maiores!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
