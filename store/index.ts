import { configureStore } from "@reduxjs/toolkit";
import bookListReducer from "./bookSlice";

const store = configureStore({
  reducer: {
    bookList: bookListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
