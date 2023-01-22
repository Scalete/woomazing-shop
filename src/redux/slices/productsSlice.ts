import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

enum Status {
    LOADING = 'loading',
    SUCCES = 'succes',
    ERROR = 'error'
}

export interface ProductItem {
    _id?: string;
    imgUrl: string;
    title: string;
    price: number;
    discount: number;
}

interface IProductSliceState {
    productsData: ProductItem[];
    status: Status;
}

const initialState: IProductSliceState = {
    productsData: [],
    status: Status.LOADING
}

export const fetchProducts = createAsyncThunk<ProductItem[]>(
    'product/fetchProductsStatus',
    async () => {

        interface AxiosProp {
            message: string,
            products: ProductItem[]
        }
  
        const { data } = await axios.get<AxiosProp>(`http://localhost:3001/products`);

        return data.products;
    }
);

export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.status = Status.LOADING;
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = Status.SUCCES;
            state.productsData = action.payload;
        })
        builder.addCase(fetchProducts.rejected, (state) => {
            state.status = Status.ERROR;
            alert(Status.ERROR);
            state.productsData = [];
        })
    },
});

export const useProducts = (state: RootState) => state.products;

export default productSlice.reducer;