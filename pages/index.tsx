import styles from "../styles/Home.module.css";
import { Book as BookType } from "../type";
import Add from "../components/Add";
import dynamic from "next/dynamic";
import { useState, Suspense } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const Book = dynamic(() => import("../components/Book"), {
  suspense: true,
});

export default function Home() {
  const initialList = useSelector((state: RootState) => state.bookList.value);
  const [isShowAdd, setIsShowAdd] = useState(false);

  return (
    <Suspense fallback={`Loading...`}>
      <div className={styles.container}>
        <div className={styles.addBtn} onClick={() => setIsShowAdd(true)}>
          <div>Add</div>
        </div>
        <div>{isShowAdd && <Add close={() => setIsShowAdd(false)} />}</div>

        <div className={styles.bookList}>
          {initialList.map((book: BookType) => (
            <div key={book?.id}>
              <div>
                <Book book={book} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Suspense>
  );
}
