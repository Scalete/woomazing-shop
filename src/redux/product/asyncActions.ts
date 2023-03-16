import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IFilteredProducts, IFilterProducts, IRelativeProducts, ProductItem } from "./interfaces";

export const fetchProducts = createAsyncThunk<IFilteredProducts, IFilterProducts>(
    'product/fetchProducts',
    async ({category, page}: IFilterProducts) => {

        interface AxiosProp {
            message: string;
            foundProducts: IFilteredProducts;
        }
  
        const { data } = await axios.get<AxiosProp>(`${process.env.REACT_APP_SERVER_URL}products/filters?name=${category}&page=${page}`);

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
  
        const { data } = await axios.get<AxiosProp>(`${process.env.REACT_APP_SERVER_URL}products/new-collection`);

        return data.foundProducts;
    }
);

export const fetchRelativeProducts = createAsyncThunk<ProductItem[], IRelativeProducts>(
    'product/fetchRelativeProducts',
    async ({_id}) => {

        interface AxiosProp {
            message: string;
            foundProducts: ProductItem[];
        }
  
        const { data } = await axios.get<AxiosProp>(`${process.env.REACT_APP_SERVER_URL}products/relative?_id=${_id}`);
        
        return data.foundProducts;
    }
);