import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IFilteredProducts, IFilterProducts } from "./interfaces";

export const fetchProducts = createAsyncThunk<IFilteredProducts, IFilterProducts>(
    'product/fetchCategoryChange',
    async ({category, page}: IFilterProducts) => {

        interface AxiosProp {
            message: string;
            foundProducts: IFilteredProducts;
        }
  
        const { data } = await axios.get<AxiosProp>(`http://localhost:3001/products/filters?name=${category}&page=${page}`);

        return data.foundProducts;
    }
);