import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';
import cartSlice from './cart/slice';
import categorySlice from './categories/slice';
import fullProductSlice from './full-product/slice';
import orderSlice from './order/slice';
import productSlice from './product/slice';

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export const store = configureStore({
  reducer: {
    products: productSlice,
    fullProduct: fullProductSlice,
    categories: categorySlice,
    cartProducts: cartSlice,
    order: orderSlice,
  },
})