import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IOrderItem } from "./interface";

export const postOrder = createAsyncThunk<string, IOrderItem>(
    'order/postOrderStatus',
    async (order: IOrderItem) => {

        interface AxiosProp {
            message: string;
            order: IOrderItem;
        }
  
        const { data } = await axios.post<AxiosProp>(`http://localhost:3001/order`, order);

        return data.message;
    }
);