import { Status } from "../globalIntefaces";

export interface CategoryItem {
    _id: string,
    name: string
}

export interface ICategorySliceState {
    categoryData: CategoryItem[];
    categoryId: number
    status: Status;
}