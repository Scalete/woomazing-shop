import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Status } from "../globalIntefaces";
import { fetchCategories } from "./asyncAcrions";
import { IFilterSliceState } from "./interfaces";

const initialState: IFilterSliceState = {
    categoryData: [],
    categoryId: 0,
    status: Status.LOADING
}

export const filterSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setCategoryId(state, action: PayloadAction<number>) {
            state.categoryId = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.pending, (state) => {
            state.status = Status.LOADING;
        })
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.status = Status.SUCCES;
            state.categoryData = action.payload;
        })
        builder.addCase(fetchCategories.rejected, (state) => {
            state.status = Status.ERROR;
            alert(Status.ERROR);
            state.categoryData = [];
        })
    },
});

export default filterSlice.reducer;