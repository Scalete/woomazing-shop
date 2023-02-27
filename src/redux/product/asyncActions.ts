import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ICategoryName, ProductItem } from "./interfaces";

export const fetchFilterChange = createAsyncThunk<ProductItem[], ICategoryName>(
    'product/fetchCategoryChange',
    async (category: ICategoryName) => {

        interface AxiosProp {
            message: string;
            foundProducts: ProductItem[];
        }
  
        const { data } = await axios.get<AxiosProp>(`http://localhost:3001/products/filters?name=${category.name}`);

        return data.foundProducts;
    }
);