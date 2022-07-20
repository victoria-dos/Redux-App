import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Bella Goth" },
  { id: "1", name: "Mortimer Goth" },
  { id: "2", name: "Cassandra Goth" },
  { id: "3", name: "Alexander Goth" }
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {}
});

export default usersSlice.reducer;
