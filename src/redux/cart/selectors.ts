import { RootState } from "../store";
import { cartSlice } from "./slice";

export const useCartProducts = (state: RootState) => state.cartProducts;
export const {addCartItem, minusCartItemCount, addCartItemCount, resetStatus, deleteCartItem, clearCart} = cartSlice.actions;