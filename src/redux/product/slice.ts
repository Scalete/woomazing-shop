import { createSlice } from "@reduxjs/toolkit";
import { Status } from "../globalIntefaces";
import { fetchFilterChange } from "./asyncActions";
import { IProductSliceState } from "./interfaces";

const initialState: IProductSliceState = {
    productsData: [],
    status: Status.LOADING
}

export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {

        builder.addCase(fetchFilterChange.pending, (state) => {
            state.status = Status.LOADING;
        })
        builder.addCase(fetchFilterChange.fulfilled, (state, action) => {
            state.status = Status.SUCCES;
            state.productsData = action.payload;
        })
        builder.addCase(fetchFilterChange.rejected, (state) => {
            state.status = Status.ERROR;
            alert(Status.ERROR);
            state.productsData = [];
        })
    },
});

export default productSlice.reducer;