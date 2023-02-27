import { RootState } from "../store";
import { filterSlice } from "./slice";

export const useCategories = (state: RootState) => state.filters;
export const {setCategoryId} = filterSlice.actions;