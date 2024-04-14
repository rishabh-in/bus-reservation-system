import {configureStore} from '@reduxjs/toolkit';
import authSlice from './slice/authSlice';

const appStore = configureStore({
  reducer: {
    auth: authSlice.reducer
  }
})

export default appStore;