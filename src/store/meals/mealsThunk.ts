import { createAsyncThunk } from '@reduxjs/toolkit'
import { getMealsRequest } from '../../api/mealsService'

export const getFoods = createAsyncThunk(
  'meals/getFoods',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getMealsRequest()

      return data.data
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)
