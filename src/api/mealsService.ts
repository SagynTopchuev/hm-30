import { axiosInstance } from '../config/axiosInstance'

export const getMealsRequest = () => {
  return axiosInstance.get('/foods')
}
