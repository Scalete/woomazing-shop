import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCartFromLS } from "../../utils/helperFunctions";
import { Status } from "../globalIntefaces";
import { ICartItem, ICartSliceState } from "./interfaces";

const initialState: ICartSliceState = {
    cartProducts: getCartFromLS(),
    status: Status.LOADING,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCartItem(state, action: PayloadAction<ICartItem>) {
            const cartProducts = state.cartProducts;
            const inputProduct = action.payload;
            let productAdded = false;

            if(inputProduct.count > 20) {
                state.status = Status.ERROR;
                return;
            }

            cartProducts.map((item) => {
                if (item.product._id === inputProduct.product._id && item.extraOptions.size === inputProduct.extraOptions.size && item.extraOptions.color === inputProduct.extraOptions.color) {

                    productAdded = true;
                    if (item.count + action.payload.count > 20) {
                        state.status = Status.ERROR;
                        return item;
                    }

                    item.count += action.payload.count;
                    state.status = Status.SUCCES;
                }

                return item;
            });

            if (!productAdded) {
                cartProducts.push(inputProduct);
                state.status = Status.SUCCES;
            }
        },

        addCartItemCount(state, action: PayloadAction<number>) {
            state.cartProducts[action.payload].count++;
        },

        minusCartItemCount(state, action: PayloadAction<number>) {
            state.cartProducts[action.payload].count--;
        },

        resetStatus(state) {
            state.status = Status.LOADING;
        },

        deleteCartItem(state, action: PayloadAction<number>) {
            if(window.confirm('Вы точно хотите удалить этот товар ?')) {
                state.status = Status.SUCCES;
                state.cartProducts.splice(action.payload, 1);
            } else {
                state.status = Status.ERROR;
            }
        },

        clearCart(state) {
            if(window.confirm('Вы точно хотите очистить корзину ?')) {
                state.status = Status.ALL_CART_DELETE;
                state.cartProducts = [];
            } else {
                state.status = Status.ALL_CART_ERROR_DELETE;
            }
        }
    },
});

export default cartSlice.reducer;