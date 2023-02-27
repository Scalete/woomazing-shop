import { RootState } from "../store";
import { productSlice } from "./slice";

export const useProducts = (state: RootState) => state.products;
export const {setPagination} = productSlice.actions;