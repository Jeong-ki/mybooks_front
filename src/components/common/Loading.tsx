import styles from "src/styles/Common.module.css";

export default function Loading() {
  return (
    <div className={styles.center_wrapper}>
      <div className={styles.loading}></div>
    </div>
  );
}
