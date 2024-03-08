import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getTiposCardapio: builder.query<Cardapio[], void>({
      query: () => 'restaurantes'
    }),
    getCardapio: builder.query<Restaurante, string>({
      query: (id) => `restaurantes/${id}`
    }),
    getHero: builder.query<Cardapio, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const {
  useGetTiposCardapioQuery,
  useGetCardapioQuery,
  useGetHeroQuery
} = api

export default api
