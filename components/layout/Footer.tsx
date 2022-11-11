import styles from "../../styles/components/layout/Footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://github.com/Jeong-ki"
        target="_blank"
        rel="noopener noreferrer"
      >
        Developer Github Link
      </a>
    </footer>
  );
}
