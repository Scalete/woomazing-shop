import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Status } from "../globalIntefaces";
import { fetchProducts } from "./asyncActions";
import { IProductSliceState } from "./interfaces";

const initialState: IProductSliceState = {
    productsData: [],
    page: 1,
    totalPages: 1,
    status: Status.LOADING
}

export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setPagination(state, action: PayloadAction<number>) {
            state.page = action.payload;
        },
    },
    extraReducers: (builder) => {

        builder.addCase(fetchProducts.pending, (state) => {
            state.status = Status.LOADING;
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = Status.SUCCES;
            state.productsData = action.payload.paginatedItems;
            state.totalPages = action.payload.totalPages;
            state.page = action.payload.page;
        })
        builder.addCase(fetchProducts.rejected, (state) => {
            state.status = Status.ERROR;
            alert(Status.ERROR);
            state.productsData = [];
        })
    },
});

export default productSlice.reducer;