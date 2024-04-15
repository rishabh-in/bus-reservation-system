import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../../appConfig';

const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers) => {
      let token = localStorage.getItem("authToken");
      if(token) {
        headers['Authorization'] = `Bearer ${token}`;
      }
      return headers;
    }
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/login',
        method: 'post',
        body: credentials
      })
    }),
    signup: builder.mutation({
      query: (data) => ({
        url: "/signup",
        method: "POST",
        body: data
      })
    }),
    authCheck: builder.query({
      query: (authToken) => ({
        url: `/auth/check/${authToken}`,
        method: "GET"
      })
    }) 
  })
});

export const { useLoginMutation, useSignupMutation, useAuthCheckQuery } = authApi;

export default authApi;