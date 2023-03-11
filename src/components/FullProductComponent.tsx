import React from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addCartItem, resetStatus, useCartProducts } from '../redux/cart/selectors';
import { Status } from '../redux/globalIntefaces';
import { ProductItem } from '../redux/product/interfaces';
import { useAppDispatch } from '../redux/store';
import { calculateDiscount, colors, sizes } from '../utils/helperFunctions';

export const FullProductComponent: React.FC<ProductItem> = ({_id, imgUrl, title, price, discount}) => {

    const [size, setSize] = React.useState<string>('');
    const [color, setColor] = React.useState<string>('');
    const [count, setCount] = React.useState<string>('1');

    const dispatch = useAppDispatch();
    const { status } = useSelector(useCartProducts);

    React.useEffect(() => {
        if (status === Status.SUCCES) {
            toast.success("Добавлено в корзину");
        } else if (status === Status.ERROR) {
            toast.warn("Вы не можете добавить больше 20 продуктов одного типа");
        }

        if (status !== Status.LOADING) {
            dispatch(resetStatus());
        }
    });

    const onHandleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!size) {
            toast.warn('Вы не выбрали размер');
            return;
        }

        if (!color) {
            toast.warn('Вы не выбрали цвет');
            return;
        }

        dispatch(addCartItem({
            product: {
                _id, imgUrl, title, price, discount
            },
            extraOptions: {
                color,
                size
            },
            count: Number(count)
        }));
    }

    const renderSizes = () => {
        return sizes.map((item, i) => (
            <li key={i}>
                <input type="radio" name="size" value={item} onChange={(e) => setSize(e.target.value)}/>
                <label>{item}</label>
            </li>
        ));
    }

    const renderColors = () => {
        return colors.map((item, i) => (
            <li key={i}>
                <input type="radio" name="color" value={item} className={item} onChange={(e) => setColor(e.target.value)}/>
            </li>
        ));
    }

    return (
        <div className="container">
            <div className='full-product'>
                <img src={imgUrl} alt="Product" />
                <div className="full-product-wrapper">
                    <form onSubmit={onHandleSubmit}>
                        <div className="price-wrapper">
                            <span className="discount" style={discount ? {textDecoration: 'line-through'}: {}}>${price}</span>
                            <span className="price">{discount ? '$' + calculateDiscount(price, discount): ''}</span>
                        </div>
                        <div className="size-wrapper">
                            <div className="title">Выберите размер</div>
                            <ul>
                                {renderSizes()}
                            </ul>
                        </div>
                        <div className="color-wrapper">
                            <div className="title">Выберите цвет</div>
                            <ul>
                                {renderColors()}
                            </ul>
                        </div>
                        <div className="action-wrapper">
                            <input type="number" min="1" max="20" value={count} onChange={(e) => setCount(e.target.value)} onBlur={(e) => e.target.value.length === 0 ? setCount('1'): setCount(e.target.value)}/>
                            <button className="action main">Добавить в корзину</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};