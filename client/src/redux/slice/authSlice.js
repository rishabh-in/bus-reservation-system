import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {},
  },
  reducers: {
    setAuthUser: (state, action) => {
      // Set auth token to localstorage
      localStorage.setItem("authToken", action.payload.authToken);
      state.user = action.payload;
    }
  }
});

export const {setAuthUser} = authSlice.actions;

export default authSlice;