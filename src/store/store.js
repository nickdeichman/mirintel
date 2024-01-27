import { configureStore } from '@reduxjs/toolkit'
import itemReducer from './reducer/itemModalSlice'

export default configureStore({
  reducer: {itemReducer},
})