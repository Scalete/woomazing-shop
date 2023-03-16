import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CategoryItem } from "./interfaces";

export const fetchCategories = createAsyncThunk<CategoryItem[]>(
    'category/fetchCategoryStatus',
    async () => {

        interface AxiosProp {
            message: string;
            categories: CategoryItem[];
        }
  
        const { data } = await axios.get<AxiosProp>(`${process.env.REACT_APP_SERVER_URL}categories`);

        return data.categories;
    }
);