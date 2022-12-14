import { createSlice } from "@reduxjs/toolkit";

export const bookSlice = createSlice({
  name: "bookList",
  initialState: {
    value: [
      {
        id: 1,
        name: "Book",
        price: 12,
        category: "science",
        description: "bestseller",
      },
      {
        id: 2,
        name: "BookName2",
        price: 12,
        category: "science",
        description: "bestseller",
      },
      {
        id: 3,
        name: "BookName3",
        price: 12,
        category: "science",
        description: "bestseller",
      },
      {
        id: 4,
        name: "Name4",
        price: 12,
        category: "science",
        description: "bestseller",
      },
      {
        id: 5,
        name: "Name5",
        price: 12,
        category: "science",
        description: "bestseller",
      },
      {
        id: 6,
        name: "Name6",
        price: 12,
        category: "science",
        description: "bestseller",
      },
      {
        id: 7,
        name: "Name7",
        price: 12,
        category: "science",
        description: "bestseller",
      },
    ],
    isShowAdd: false,
    isShowUpdate: false,
  },
  reducers: {
    showAdd: (state) => {
      state.isShowAdd = true;
    },
    closeAdd: (state) => {
      state.isShowAdd = false;
    },
    addBook: (state, action) => {
      state.value.push(action.payload.book);
    },
    deleteBook: (state, action) => {
      let { bookId } = action.payload;
      let newValue = state.value.filter((book) => book.id !== +bookId);
      state.value = newValue;
    },
    updateBook: (state, action) => {
      let { bookInfo } = action.payload;
      state.value.forEach((book) => {
        if (book.id === bookInfo.id) {
          let updateIndex = [...state.value].indexOf(book);
          state.value[updateIndex] = bookInfo;
        }
      });
    },
  },
});

export const { addBook, deleteBook, updateBook, showAdd, closeAdd } =
  bookSlice.actions;
export default bookSlice.reducer;
