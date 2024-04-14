import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../../appConfig';

const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({baseUrl: baseUrl}),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/login',
        method: 'post',
        body: credentials
      })
    }),
  })
});
console.log(authApi)
export const { useLoginMutation } = authApi;

export default authApi;