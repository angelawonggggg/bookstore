import styles from "../styles/Home.module.css";
import { Book as BookType } from "../type";
import Book from "../components/Book";
import Add from "../components/Add";
import { useSelector, useDispatch } from "react-redux";
import { showAdd, closeAdd } from "../store/bookSlice";
import { RootState } from "../store";

export default function Home() {
  const initialList = useSelector((state: RootState) => state.bookList.value);
  const isShowAdd = useSelector((state: RootState) => state.bookList.isShowAdd);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <div className={styles.addBtn} onClick={() => dispatch(showAdd())}>
        <div>Add</div>
      </div>
      <div>{isShowAdd && <Add close={() => dispatch(closeAdd())} />}</div>

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
  );
}
