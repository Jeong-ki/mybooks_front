import styles from "../styles/components/TableList.module.css";
import { AlgorithmList } from "../types";
import Image from "next/image";
import Bookmark from "../public/image/bookmark.png";
import BookmarkClick from "../public/image/bookmark_clicked.png";

export default function TableList({ data }: AlgorithmList) {
  return (
    <div className={styles.content_inner}>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Category</th>
            <th>Status</th>
            <th>Level</th>
            <th>Mark</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 &&
            data.map((item) => (
              <tr key={item.created}>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>{item.category}</td>
                <td className={styles.td_center}>{item.status}</td>
                <td className={styles.td_center}>{item.level}</td>
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
