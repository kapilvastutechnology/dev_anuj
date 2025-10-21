
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const dogApi = createApi({
  reducerPath: 'dogApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.freeapi.app/api/v1' }),
  endpoints: (builder) => ({
    getPost:builder.query({
      query:()=>({
        params:{
          page: '1',
           limit: '10',
          query: 'Affenpinscher'
        },
        url:'/public/dogs',
        method: 'GET'
      })
    })
  })
})

export const {useGetPostQuery} = dogApi;