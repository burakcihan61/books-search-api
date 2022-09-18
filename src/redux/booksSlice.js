import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getBooks = createAsyncThunk("/", async (search) => {
  if (!search.name) return [];
  const response = await axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=intitle:${search.name}&printType=books&orderBy=newest&maxResults=35`
  );
  return response.data.items;
});

export const booksSlice = createSlice({
  name: "books",

  initialState: {
    books: [],
    search: "",
    length: 0,
  },
  extraReducers: (builder) => {
    builder.addCase(getBooks.fulfilled, (state, action) => {
      state.books = action.payload;
      state.length = action.payload.length;
    });
  },
});

export default booksSlice.reducer;
