import { Status } from "../globalIntefaces";

export interface ProductItem {
    _id?: string;
    imgUrl: string;
    title: string;
    price: number;
    discount: number;
}

export interface ICategoryName {
    name: string | null
}

export interface IProductSliceState {
    productsData: ProductItem[];
    status: Status;
}
