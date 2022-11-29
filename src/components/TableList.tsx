import styles from "src/styles/components/TableList.module.css";
import Image from "next/image";
import Bookmark from "src/public/image/bookmark.png";
import BookmarkClick from "src/public/image/bookmark_clicked.png";
import { BookList } from "src/types";

export default function TableList({ data }: BookList) {
  return (
    <div className={styles.content_inner}>
      <table>
        <thead>
          <tr>
            <th className={styles.th_title}>제목</th>
            <th>리뷰</th>
            <th className={styles.th_rating}>평점</th>
            <th className={styles.th_rating}>총 평점</th>
            <th className={styles.th_status}>상태</th>
            <th>⭐️</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 &&
            data.map((item) => (
              <tr key={item.created}>
                <td>{item.title}</td>
                <td className={styles.td_desc}>{item.description}</td>
                <td className={styles.td_center}>{item.myRating}</td>
                <td className={styles.td_center}>{item.avgRating}</td>
                <td className={styles.td_center}>{item.status}</td>
                <td className={styles.td_center}>
                  {
                    <Image
                      src={item.bookmark ? BookmarkClick : Bookmark}
                      alt=""
                      width={15}
                      height={15}
                    />
                  }
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
