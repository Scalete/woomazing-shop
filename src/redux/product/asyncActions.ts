import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IFilteredProducts, IFilterProducts, ProductItem } from "./interfaces";

export const fetchProducts = createAsyncThunk<IFilteredProducts, IFilterProducts>(
    'product/fetchProducts',
    async ({category, page}: IFilterProducts) => {

        interface AxiosProp {
            message: string;
            foundProducts: IFilteredProducts;
        }
  
        const { data } = await axios.get<AxiosProp>(`http://localhost:3001/products/filters?name=${category}&page=${page}`);

        return data.foundProducts;
    }
);

export const fetchNewCollectionsProducts = createAsyncThunk<ProductItem[]>(
    'product/fetchNewCollectionProducts',
    async () => {

        interface AxiosProp {
            message: string;
            foundProducts: ProductItem[];
        }
  
        const { data } = await axios.get<AxiosProp>(`http://localhost:3001/products/new-collection`);

        return data.foundProducts;
    }
);