import { Status } from "../globalIntefaces";

export interface ProductItem {
    _id?: string;
    imgUrl: string;
    title: string;
    price: number;
    discount: number;
}

export interface IFilterProducts {
    category: string | null,
    page: number | null
}

export interface IProductSliceState {
    productsData: ProductItem[];
    page: number;
    totalPages: number,
    status: Status;
}

export interface IFilteredProducts {
    page: number;
    totalPages: number;
    paginatedItems: ProductItem[];
}
