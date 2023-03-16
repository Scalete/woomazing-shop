import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { CartItemProps } from '../redux/cart/interfaces';
import { addCartItemCount, minusCartItemCount } from '../redux/cart/selectors';
import { useAppDispatch } from '../redux/store';
import { calculateDiscount, renderCartColors } from '../utils/helperFunctions';

export const CartItem: React.FC<CartItemProps> = ({_cartId, _id, imgUrl, title, discount, price, count, extraOptions, onDeleteItem}) => {

    const dispatch = useAppDispatch();
    const prevCountRef = React.useRef<undefined | number>();

    React.useEffect(() => {
        if (prevCountRef.current !== undefined && prevCountRef.current !== count) {
            if (count >= 20) {
                toast.warn("Добавлен максимум данного товара");
            } else if (count <= 1) {
                toast.warn("Добавлен минимум данного товара");
            }
        }

        prevCountRef.current = count;
    }, [count]);

    return (
        <ul className="cart-row">
            <li className="cart-cell">
                <svg onClick={() => onDeleteItem(_cartId)} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m1 1 12 12m0-12L1 13" stroke="#000"/></svg>
                <img src={imgUrl} alt="Product Info" />
                <Link className='hover-underline-animation' to={`${process.env.REACT_APP_HOME_URL}product?_id=${_id}`}>{title}, <br /> <span className={extraOptions.color}>{renderCartColors(extraOptions.color)}</span>, <strong style={{fontWeight: '700'}}>{extraOptions.size}</strong></Link>
            </li>
            <li className="cart-cell">
                <span>${discount ? calculateDiscount(price, discount): price}</span>
            </li>
            <li className="cart-cell">
                <span className={`count-change ${count <= 1 ? 'disabled': ''}`} onClick={() => dispatch(minusCartItemCount(_cartId))}>-</span>
                <input type="number" min="1" max="20" value={count} disabled />
                <span className={`count-change ${count >= 20 ? 'disabled': ''}`} onClick={() => dispatch(addCartItemCount(_cartId))}>+</span>
            </li>
            <li className="cart-cell">
                <span>${discount ? count * calculateDiscount(price, discount): count * price}</span>
            </li>
        </ul>
    );
};