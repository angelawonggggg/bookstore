import React from "react";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateBook } from "../store/bookSlice";
import { Book } from "../type";

function Update({ close, book }: { close: () => void; book: Book }) {
  const dispatch = useDispatch();

  const [bookInfo, setBookInfo] = useState({
    id: book.id,
    name: book.name,
    price: book.price,
    category: book.category,
    description: book.description,
  });

  const update = () => {
    let action = {
      bookInfo,
    };
    dispatch(updateBook(action));
    close();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.add}>
        <div className={styles.closeBtn} onClick={close}>
          Close
        </div>

        <form>
          <label>Name</label>
          <input
            type="text"
            value={bookInfo.name}
            onChange={(e) => setBookInfo({ ...bookInfo, name: e.target.value })}
          />
          <label>Price</label>
          <input
            type="number"
            value={bookInfo.price}
            onChange={(e) =>
              setBookInfo({ ...bookInfo, price: +e.target.value })
            }
          />
          <label>Category</label>
          <input
            type="text"
            value={bookInfo.category}
            onChange={(e) =>
              setBookInfo({ ...bookInfo, category: e.target.value })
            }
          />
          <label>Description</label>
          <input
            type="text"
            value={bookInfo.description}
            onChange={(e) =>
              setBookInfo({ ...bookInfo, description: e.target.value })
            }
          />
        </form>
        <div className={styles.addBtn} onClick={update}>
          Update
        </div>
      </div>
    </div>
  );
}

export default Update;
