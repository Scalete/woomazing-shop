import { Status } from "../globalIntefaces";
import { ProductItem } from "../product/interfaces";

export interface ICartItem {
    product: ProductItem;
    extraOptions: IProductExtraOptions;
    count: number;
}

export interface ICartSliceState {
    cartProducts: ICartItem[];
    status: Status;
}

export interface IProductExtraOptions {
    color: string;
    size: string;
}

export interface CartItemProps {
    _cartId: number;
    _id: string;
    imgUrl: string;
    title: string;
    discount: number;
    price: number;
    count: number;
    extraOptions: IProductExtraOptions;
    onDeleteItem: (_cartId: number) => void
}