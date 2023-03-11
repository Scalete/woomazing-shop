import { ReactNode } from "react";

export interface IFormData {
    name: string;
    email: string;
    tel: string;
    message?: string;
}

export enum Status {
    LOADING = 'loading',
    SUCCES = 'succes',
    ERROR = 'error',
    ALL_CART_DELETE = 'all_cart_delete',
    ALL_CART_ERROR_DELETE = 'all_cart_error_delete',
}

export interface IDataFormProps {
    activeForm?: boolean;
    setActiveForm?: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ITitleProductsProps {
    title: string;
    asyncFunc: any;
    button?: ReactNode;
}