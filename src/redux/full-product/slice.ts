import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Status } from "../globalIntefaces";
import { fetchProduct } from "./asyncActions";
import { IFullProductSliceState } from "./interfaces";

const initialState = {
    product: {
        imgUrl: '',
        title: '',
        price: 0,
        discount: 0,
    },
    status: Status.LOADING,
}

interface IReducers {
    setData: (state: IFullProductSliceState, action: PayloadAction<any>) => void;
    setLoading: (state: IFullProductSliceState) => void;
    setError: (state: IFullProductSliceState) => void;
}

const reducers: IReducers = {
    setData: (state, action) => {
        state.status = Status.SUCCES;
        state.product = action.payload;
    },
    setLoading: (state) => {
        state.status = Status.LOADING;
    },
    setError: (state) => {
        state.status = Status.ERROR;
        alert(Status.ERROR);
        state.product = {
            imgUrl: '',
            title: '',
            price: 0,
            discount: 0,
        };
    },
};

export const fullProductSlice = createSlice({
    name: "fullProduct",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchProduct.pending, reducers.setLoading)
        .addCase(fetchProduct.fulfilled, reducers.setData)
        .addCase(fetchProduct.rejected, reducers.setError)
    },
});

export default fullProductSlice.reducer;