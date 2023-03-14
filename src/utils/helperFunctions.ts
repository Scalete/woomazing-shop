import React from "react";
import { ICartItem } from "../redux/cart/interfaces";
import { useLocation } from 'react-router-dom';

export const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
export const colors = ['brown', 'gray', 'red', 'orange'];

export const calculateDiscount = (price: number, discount: number) => {
    return discount !== 0? Math.floor(( price * discount ) / 100): price;
}

export function getCartFromLS(): ICartItem[] {
    const data = localStorage.getItem('cart');
    return data? JSON.parse(data): [];
}

export const ScrollToTop: React.FC = () => {
    const { pathname } = useLocation();
    React.useEffect(() => {
        
        window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
}

export const renderCartColors = (color: string) => {

    switch(color) {
        case 'brown':
            return 'Коричневый';
        case 'gray':
            return 'Серый';
        case 'red':
            return 'Красный';
        case 'orange':
            return 'Оранжевый';
        default: 
        return '';
    }
}

export const calcTotalSum = (cartProducts: ICartItem[]) => {
    return cartProducts
    .map(item => item.product.discount ? calculateDiscount(item.product.price, item.product.discount) * item.count: item.product.price * item.count)
    .reduce((sum, item) => sum + item);
}