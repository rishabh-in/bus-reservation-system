import {configureStore} from '@reduxjs/toolkit';
import authSlice from './slice/authSlice';
import authApi from './api/authApi';

const appStore = configureStore({
  reducer: {
    auth: authSlice.reducer,
    authApi: authApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware)
})

export default appStore;