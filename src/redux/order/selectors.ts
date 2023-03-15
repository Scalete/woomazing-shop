import { RootState } from "../store";
import { orderSlice } from "./slice";

export const useOrders = (state: RootState) => state.order;

export const {resetStatus} = orderSlice.actions;