import { ReactNode } from "react";

export enum Status {
    LOADING = 'loading',
    SUCCES = 'succes',
    ERROR = 'error'
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