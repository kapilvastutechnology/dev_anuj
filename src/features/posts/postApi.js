
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://68e33fad8e14f4523dacdbdb.mockapi.io' }),
  endpoints: (builder) => ({
     getPost: builder.query({
      query: (id) => ({
        url:`/posts/${id}`,
        method:'GET'
      }),
      providesTags: ['Post']

    }),
    
    getPosts: builder.query({
      query: () => ({
        url:'/posts',
        method:'GET'
      }),
      providesTags: ['Post']

    }),

   
    createPost:builder.mutation({
        query:(data)=>({
            url:'/posts',
            body:data,
            method: 'POST'
        }),
        invalidatesTags:['Post']
    }),

    removePost:builder.mutation({
      query: (id)=>({
        url:`/posts/${id}`,
        method:'DELETE'
      }),
      invalidatesTags:['Post']
    })

  })
});

// Auto-generated hooks
export const { useGetPostsQuery, useCreatePostMutation, 
  useRemovePostMutation, useGetPostQuery } = postApi;