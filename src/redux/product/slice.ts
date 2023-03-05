import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Status } from "../globalIntefaces";
import { fetchNewCollectionsProducts, fetchProducts, fetchRelativeProducts } from "./asyncActions";
import { IProductSliceState } from "./interfaces";

const initialState: IProductSliceState = {
    productsData: [],
    page: 1,
    totalPages: 1,
    status: Status.LOADING
}

interface IReducers {
    setData: (state: IProductSliceState, action: PayloadAction<any>) => void;
    setLoading: (state: IProductSliceState) => void;
    setError: (state: IProductSliceState) => void;
}
  
const reducers: IReducers = {
    setData: (state, action) => {
        state.status = Status.SUCCES;
        state.productsData = action.payload;
    },
    setLoading: (state) => {
        state.status = Status.LOADING;
    },
    setError: (state) => {
        state.status = Status.ERROR;
        alert(Status.ERROR);
        state.productsData = [];
    },
};

export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setPagination(state, action: PayloadAction<number>) {
            state.page = action.payload;
        },
    },
    extraReducers: (builder) => {

        builder.addCase(fetchProducts.pending, reducers.setLoading)
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = Status.SUCCES;
            state.productsData = action.payload.paginatedItems;
            state.totalPages = action.payload.totalPages;
            state.page = action.payload.page;
        }).addCase(fetchProducts.rejected, reducers.setError)
        .addCase(fetchNewCollectionsProducts.pending, reducers.setLoading)
        .addCase(fetchNewCollectionsProducts.fulfilled, reducers.setData)
        .addCase(fetchNewCollectionsProducts.rejected, reducers.setError)
        .addCase(fetchRelativeProducts.pending, reducers.setLoading)
        .addCase(fetchRelativeProducts.fulfilled, reducers.setData)
        .addCase(fetchRelativeProducts.rejected, reducers.setError)
    },
});

export default productSlice.reducer;