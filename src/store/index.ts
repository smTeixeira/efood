import { configureStore } from '@reduxjs/toolkit'

import api from '../services/api'

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaulMiddleware) =>
    getDefaulMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
