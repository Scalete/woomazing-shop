import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { CartItem } from '../components/CartItem';
import { Empty } from './Empty';
import { TitleBreadcrumbs } from '../components/TitleBreadcrumbs';
import { clearCart, deleteCartItem, resetStatus, useCartProducts } from '../redux/cart/selectors';
import { Status } from '../redux/globalIntefaces';
import { useAppDispatch } from '../redux/store';
import { calcTotalSum } from '../utils/helperFunctions';
import { HelmetComponent } from '../components/HelmetComponent';

export const Cart: React.FC = () => {

    const { cartProducts } = useSelector(useCartProducts);
    const { status } = useSelector(useCartProducts);
    const dispatch = useAppDispatch();

    const renderProducts = () => {
        return cartProducts.map((item, i) => <CartItem key={i} _cartId={i} _id={item.product._id as string} imgUrl={process.env.REACT_APP_PUBLIC_URL + item.product.imgUrl} title={item.product.title} discount={item.product.discount} price={item.product.price} count={item.count} extraOptions={item.extraOptions} onDeleteItem={onDeleteItem}/>);
    }

    React.useEffect(() => {
        if (status === Status.SUCCES) {
            toast.success("Продукт успешно удален");
        } else if (status === Status.ERROR) {
            toast.warn("Продукт не удален");
        } else if (status === Status.ALL_CART_DELETE) {
            toast.success("Корзина успешно очищена");
        } else if (status === Status.ALL_CART_ERROR_DELETE) {
            toast.warn("Корзина не очищена");
        }

        if (status !== Status.LOADING) {
            dispatch(resetStatus());
        }
    }, [status, dispatch]);

    const onDeleteItem = (_cartId: number) => {
        dispatch(deleteCartItem(_cartId));
    }

    const onClearCart = () => {
        const isClearCart = window.confirm('Вы точно хотите очистить корзину ?');
        console.log(isClearCart);
        dispatch(clearCart(isClearCart));
    }

    return (
        <>
            <TitleBreadcrumbs title='Корзина' breadcrumbs={[{link: `${process.env.REACT_APP_HOME_URL}`, name: 'Главная'}, {link: `${process.env.REACT_APP_HOME_URL}cart`, name: 'Корзина'}]}/>
            <HelmetComponent title='Корзина' description='Страница с вашими товарами'/>
            <section className="cart">
                <div className="container">
                    {
                        !cartProducts.length ? <Empty text='Ваша корзина пуста.'/> : (
                            <>
                                <ul className="cart-header">
                                    <li>Товар</li>
                                    <li>Цена</li>
                                    <li>Количество</li>
                                    <li>Всего</li>
                                </ul>
                                {renderProducts()}
                                <div className="actions">
                                    <div className="action red" onClick={onClearCart}>Очистить корзину</div>
                                    <div>
                                        <span>Подытог: ${calcTotalSum(cartProducts)}</span>
                                        <div className="actions-wrapper">
                                            <div className="total"><span>Итого:</span><span>${calcTotalSum(cartProducts)}</span></div>
                                            <Link to={`${process.env.REACT_APP_HOME_URL}checkout`} className="action main">Оформить заказ</Link>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    }
                </div>
            </section>
        </>
        
    );
};