import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';
import categorySlice from './categories/slice';
import productSlice from './product/slice';

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export const store = configureStore({
  reducer: {
    products: productSlice,
    categories: categorySlice,
  },
})