import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Status } from "../globalIntefaces";
import { fetchCategories } from "./asyncActions";
import { ICategorySliceState } from "./interfaces";

const initialState: ICategorySliceState = {
    categoryData: [],
    categoryId: 0,
    status: Status.LOADING
}

export const categorySlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        setCategoryId(state, action: PayloadAction<number>) {
            state.categoryId = action.payload;
        }
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

export default categorySlice.reducer;