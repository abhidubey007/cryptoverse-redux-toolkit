import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
<<<<<<< HEAD
    'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
    'X-RapidAPI-Host': process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST
}

=======
    'X-RapidAPI-Key': 'eab02f8b0amsh65e1f01da44372bp1a0b7fjsnde2e4184ad44',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

>>>>>>> 58e9962859d999d152a5b0273faae9fb9d0a0681
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
<<<<<<< HEAD
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_CRYPTO_API_URL }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`)
=======
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
>>>>>>> 58e9962859d999d152a5b0273faae9fb9d0a0681
        })
    })
})

<<<<<<< HEAD
export const { useGetCryptosQuery, useGetCryptoDetailsQuery } = cryptoApi;
=======
export const { useGetCryptosQuery } = cryptoApi;
>>>>>>> 58e9962859d999d152a5b0273faae9fb9d0a0681
