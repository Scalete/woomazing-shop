import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Status } from "../globalIntefaces";
import { postOrder } from "./asyncActions";
import { IOrderSlice } from "./interface";

const initialState: IOrderSlice = {
    orders: [],
    status: Status.LOADING,
}

interface IReducers {
    setData: (state: IOrderSlice, action: PayloadAction<any>) => void;
    setLoading: (state: IOrderSlice) => void;
    setError: (state: IOrderSlice) => void;
}
  
const reducers: IReducers = {
    setData: (state, action) => {
        state.status = Status.SUCCES;
        state.orders = action.payload.orders || [];
    },
    setLoading: (state) => {
        state.status = Status.LOADING;
    },
    setError: (state) => {
        state.status = Status.ERROR;
        alert(Status.ERROR);
        state.orders = [];
    },
};

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        resetStatus(state) {
            state.status = Status.LOADING;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(postOrder.pending, reducers.setLoading)
        .addCase(postOrder.fulfilled, reducers.setData)
        .addCase(postOrder.rejected, reducers.setError);
    }
});

export default orderSlice.reducer;