import { RootState } from "../store";
import { categorySlice } from "./slice";

export const useCategories = (state: RootState) => state.categories;
export const {setCategoryId} = categorySlice.actions;