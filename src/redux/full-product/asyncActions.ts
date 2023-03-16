import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IRelativeProducts, ProductItem } from "../product/interfaces";

export const fetchProduct = createAsyncThunk(
    'product/fetchProduct',
    async ({_id}: IRelativeProducts) => {

        interface AxiosProp {
            message: string;
            foundProduct: ProductItem[];
        }
  
        const { data } = await axios.get<AxiosProp>(`${process.env.REACT_APP_SERVER_URL}products/product-info?_id=${_id}`);

        return data.foundProduct;
    }
);