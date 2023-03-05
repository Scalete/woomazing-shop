import { Status } from "../globalIntefaces";
import { ProductItem } from "../product/interfaces";

export interface IFullProductSliceState {
    product: ProductItem;
    status: Status;
}