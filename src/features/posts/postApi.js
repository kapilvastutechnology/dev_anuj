
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://68e33fad8e14f4523dacdbdb.mockapi.io' }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => ({
        url:'/posts',
        method:'GET'
      })
    }),

    createPost:builder.mutation({
        query:(data)=>({
            url:'/posts',
            body:data,
            method: 'POST'
        })
    })

  })
});

// Auto-generated hooks
export const { useGetPostsQuery, useCreatePostMutation } = postApi;