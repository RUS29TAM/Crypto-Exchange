import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
    'X-RapidAPI-Key': 'f5d592a778msh9e67b6bf429cad3p150cd1jsn297d7a82ced0',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';
const createRequest = (url) => ({url, headers: cryptoApiHeaders})
export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: (builder) => ({
      getCryptos: builder.query({
      query:  (count) => createRequest(`/coins?limit=${count}`)
    })
  })
})

export const {
  useGetCryptosQuery,
} = cryptoApi;
// const createRequest = (url) => ({url, headers: cryptoApiHeaders})
//
// export const cryptoApi = createApi({
//     reducerPath: 'cryptoApi',
//     baseQuery: fetchBaseQuery({baseUrl}),
//     endpoints: (builder) => ({
//         getCryptos: builder.query({
//             query: () => createRequest('/coins') //https://youtu.be/9DDX3US3kss?t=2963
//         })
//     })
// })
//
// export const { useGetCryptosQuery } = cryptoApi;


// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/exchanges',
//     params: {
//         referenceCurrencyUuid: 'yhjMzLPhuIDl',
//         limit: '50',
//         offset: '0',
//         orderBy: '24hVolume',
//         orderDirection: 'desc'
//     },
//     headers: {
//         'X-RapidAPI-Key': 'f5d592a778msh9e67b6bf429cad3p150cd1jsn297d7a82ced0',
//         'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//     }
// };

