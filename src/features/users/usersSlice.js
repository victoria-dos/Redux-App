import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = [
  { id: "bella", name: "Bella Goth", password: "1234"},
  { id: "mortimer", name: "Mortimer Goth", password: "1234" },
  { id: "cassy", name: "Cassandra Goth", password: "1234" },
  { id: "xander", name: "Alexander Goth", password: "1234"}
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    userCreated: {
      reducer(state, action) {
        state.push(action.payload);
      }
    },
  }
});

export default usersSlice.reducer;
