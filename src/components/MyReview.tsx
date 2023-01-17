import styles from "src/styles/components/MyReview.module.css";

export default function MyReview() {
  return (
    <div className={styles.wrapBox}>
      <div className={styles.status}>
        <button className={`${styles.statusBtn} ${styles.active}`}>
          읽은 책
        </button>
        <button className={styles.statusBtn}>읽고있는 책</button>
        <button className={styles.statusBtn}>읽고싶은 책</button>
      </div>
    </div>
  );
}
