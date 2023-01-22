import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';
import productSlice from './slices/productsSlice';

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export const store = configureStore({
  reducer: {
    products: productSlice
  },
})