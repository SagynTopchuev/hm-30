import { configureStore } from '@reduxjs/toolkit'
import { mealsSlice } from './meals/mealsSlice'
// import { mealsSlice } from './meals/mealsSlice'

export const store = configureStore({
  reducer: {
    [mealsSlice.name]: mealsSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
