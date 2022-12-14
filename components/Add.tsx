import React from "react";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import { Book } from "../type";
import { useDispatch } from "react-redux";
import { addBook } from "../store/bookSlice";

function Add({ close }: { close: () => void }) {
  const dispatch = useDispatch();

  const [newBook, setNewBook] = useState({
    id: 0,
    name: "",
    price: 0,
    category: "",
    description: "",
    writable: true,
  });

  const addBookToList = (book: Book) => {
    // simple id generator for each newly added book
    book.id = Math.floor(Math.random() * 1000);
    const addBookAction = {
      book,
    };
    dispatch(addBook(addBookAction));
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
            onChange={(e) =>
              setNewBook({ ...newBook, name: e.target.value.trim() })
            }
          />
          <label>Price</label>
          <input
            type="number"
            onChange={(e) =>
              setNewBook({ ...newBook, price: +e.target.value.trim() })
            }
          />
          <label>Category</label>
          <input
            type="text"
            onChange={(e) =>
              setNewBook({ ...newBook, category: e.target.value.trim() })
            }
          />
          <label>Description</label>
          <input
            type="text"
            onChange={(e) =>
              setNewBook({ ...newBook, description: e.target.value.trim() })
            }
          />
        </form>
        <div
          className={styles.addBtn}
          onClick={() => {
            addBookToList(newBook);
          }}
        >
          Add
        </div>
      </div>
    </div>
  );
}

export default Add;
