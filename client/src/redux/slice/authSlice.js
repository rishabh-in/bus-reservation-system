import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {},
  },
  reducers: {
    login: (state, action) => {
      // Set auth token to localstorage
      // Set user
    }
  }
});

export const {login} = authSlice.actions;

export default authSlice;