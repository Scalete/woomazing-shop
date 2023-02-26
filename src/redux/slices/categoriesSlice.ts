import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
import { Status } from "./productsSlice";

interface CategoryItem {
    _id: string,
    name: string
}

interface ICategorySliceState {
    categoryData: CategoryItem[];
    categoryId: number,
    status: Status;
}

const initialState: ICategorySliceState = {
    categoryData: [],
    categoryId: 0,
    status: Status.LOADING
}

export const fetchCategories = createAsyncThunk<CategoryItem[]>(
    'category/fetchCategoryStatus',
    async () => {

        interface AxiosProp {
            message: string;
            categories: CategoryItem[];
        }
  
        const { data } = await axios.get<AxiosProp>(`http://localhost:3001/categories`);

        return data.categories;
    }
);

export const categorySlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        setCategoryId(state, action: PayloadAction<number>) {
            state.categoryId = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.pending, (state) => {
            state.status = Status.LOADING;
        })
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.status = Status.SUCCES;
            state.categoryData = action.payload;
        })
        builder.addCase(fetchCategories.rejected, (state) => {
            state.status = Status.ERROR;
            alert(Status.ERROR);
            state.categoryData = [];
        })
    },
});

export const useCategories = (state: RootState) => state.categories;
export const {setCategoryId} = categorySlice.actions;

export default categorySlice.reducer;