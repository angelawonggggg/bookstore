import styles from "../styles/Home.module.css";
import { Book } from "../type";
import Update from "../components/Update";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteBook } from "../store/bookSlice";

function Book({ book }: { book: Book }) {
  const dispatch = useDispatch();
  const [isShowUpdate, setIsShowUpdate] = useState(false);

  const deleteBookFromList = (
    e: React.MouseEvent<HTMLDivElement>,
    bookId: number
  ) => {
    e.stopPropagation();
    let action = {
      bookId,
    };
    dispatch(deleteBook(action));
  };

  return (
    <>
      <div className={styles.book} onClick={() => setIsShowUpdate(true)}>
        <div className={styles.bookName}>{book.name}</div>

        <div className={styles.bookDetails}>
          <div>{`$${book.price}`}</div>
          <div>{book.category}</div>
          <div>{book.description}</div>
        </div>

        <div
          className={styles.dangerBtn}
          onClick={(e) => deleteBookFromList(e, book.id)}
        >
          Delete
        </div>
      </div>
      {isShowUpdate && (
        <Update book={book} close={() => setIsShowUpdate(false)} />
      )}
    </>
  );
}

export default Book;
