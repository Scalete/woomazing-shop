import { ICartItem } from "../cart/interfaces";
import { IUserAddress, IUserInfo, Status } from "../globalIntefaces";

export interface IOrderItem {
    _id?: string;
    userInfo: IUserInfo;
    userAdress: IUserAddress;
    comment: string;
    products: ICartItem[];
}

export interface IOrderSlice {
    orders: IOrderItem[];
    status: Status;
}

export interface IFormDataCheckout {
    name: string;
    email: string;
    tel: string;
    country: string;
    city: string;
    street: string;
    house: string;
    apartment: string;
    comment: string;
}