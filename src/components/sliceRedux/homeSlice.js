import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const homeSlice = createSlice({
  name: "home",
  initialState: {
    status: "idle",
    posts: [],
    comments: [],
    albums: [],
    photos: [],
    todos: [],
    users: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.status = "idle";
      })

      .addCase(fetchComments.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.status = "idle";
      })

      .addCase(fetchAlbums.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAlbums.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.status = "idle";
      })

      .addCase(fetchPhotos.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPhotos.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.status = "idle";
      })

      .addCase(fetchTodos.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.status = "idle";
      })

      .addCase(fetchUsers.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.status = "idle";
      });
  },
});

export default homeSlice;

export const fetchPosts = createAsyncThunk("home/fetchPosts", async () => {
  const res = await axios({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/posts",
  });
  return res.data;
});

export const fetchComments = createAsyncThunk(
  "home/fetchComments",
  async () => {
    const res = await axios({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/comments",
    });
    return res.data;
  }
);

export const fetchAlbums = createAsyncThunk("home/fetchAlbums", async () => {
  const res = await axios({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/albums",
  });
  return res.data;
});

export const fetchPhotos = createAsyncThunk("home/fetchPhotos", async () => {
  const res = await axios({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/photos",
  });
  return res.data;
});

export const fetchTodos = createAsyncThunk("home/fetchTodos", async () => {
  const res = await axios({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/todos",
  });
  return res.data;
});

export const fetchUsers = createAsyncThunk("home/fetchUsers", async () => {
  const res = await axios({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/users",
  });
  return res.data;
});
