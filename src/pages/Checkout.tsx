import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { TitleBreadcrumbs } from '../components/TitleBreadcrumbs';
import { clearCart, resetStatus, useCartProducts } from '../redux/cart/selectors';
import { Status } from '../redux/globalIntefaces';
import { postOrder } from '../redux/order/asyncActions';
import { IFormDataCheckout } from '../redux/order/interface';
import { useOrders } from '../redux/order/selectors';
import { useAppDispatch } from '../redux/store';
import { handleChange } from '../utils/contactsHandler';
import { calcTotalSum, calculateDiscount } from '../utils/helperFunctions';
import { Empty } from './Empty';

export const Checkout: React.FC = () => {

    const { cartProducts } = useSelector(useCartProducts);
    const { status } = useSelector(useOrders);
    const dispatch = useAppDispatch();
    const isOrder = React.useRef<boolean>(false);;

    const [formData, setFormData] = React.useState<IFormDataCheckout>({
        name: '',
        email: '',
        tel: '',
        country: '',
        city: '',
        street: '',
        house: '',
        apartment: '',
        comment: ''
    });

    const renderCartProducts = () => {
        return cartProducts?.map((item, i) => <li key={i}><span>{item.product.title}</span><span>${item.product.discount ? item.count * calculateDiscount(item.product.price, item.product.discount): item.count * item.product.price}</span></li>);
    }

    const renderCheckoutSuccess = () => {
        if (isOrder.current) {
            isOrder.current = false;
            return (
                <div className="checkout-success">
                    <svg width="72" height="84" viewBox="0 0 72 84" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M53.122 30.876a2.999 2.999 0 0 1 0 4.248l-18 18a2.998 2.998 0 0 1-4.248 0l-9-9a3.004 3.004 0 0 1 4.248-4.248l6.876 6.882 15.876-15.882a3 3 0 0 1 4.248 0Z" fill="#6E9C9F"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12 0h48a12 12 0 0 1 12 12v60a12 12 0 0 1-12 12H12A12 12 0 0 1 0 72V12A12 12 0 0 1 12 0Zm0 6a6 6 0 0 0-6 6v60a6 6 0 0 0 6 6h48a6 6 0 0 0 6-6V12a6 6 0 0 0-6-6H12Z" fill="#6E9C9F"/></svg>
                    <div className="title-wrapper">
                        <h3>Заказ успешно оформлен</h3>
                        <p>Мы свяжемся с вами в ближайшее время!</p>
                    </div>
                    <Link to='/' className="action second">Перейти на главную</Link>
                </div>
            )
        }
    }

    React.useEffect(() => {
        if (status === Status.SUCCES) {
            dispatch(clearCart(true));
            isOrder.current = true;
        }
        dispatch(resetStatus());
    }, [status, dispatch]);

    const onHandleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        dispatch(postOrder({
            userInfo: {
                name: formData.name,
                email: formData.email,
                tel: formData.tel,
            },
            userAdress: {
                country: formData.country,
                city: formData.city,
                street: formData.street,
                house: formData.house,
                apartment: formData.apartment,
            },
            comment: formData.comment,
            products: cartProducts
        }));
    }

    return (
        <>
            <TitleBreadcrumbs title='Оформление заказа' breadcrumbs={[{link: '/', name: 'Главная'}, {link: '/checkout', name: 'Оформление заказа'}]}/>
                
            <section className="checkout">
                <div className="container">
                {!cartProducts.length && !isOrder.current? <Empty text='Добавте хоть один продукт в корзину'/>: cartProducts.length && !isOrder.current ?  (
                    <form className='main' onSubmit={onHandleSubmit}>
                        <div className="checkout-details">
                            <div className="checkout-form">
                                <h3>Данные покупателя</h3>
                                <input type="text" name="name" placeholder='Имя' onChange={(e) => handleChange(e, setFormData)} required />
                                <input type="email" name="email" placeholder='E-mail' onChange={(e) => handleChange(e, setFormData)} required />
                                <input type="text" name="tel" placeholder='Телефон' onChange={(e) => handleChange(e, setFormData)} required />
                            </div>
                            <div className="checkout-form">
                                <h3>Адрес получателя</h3>
                                <input type="text" name='country' placeholder='Страна' onChange={(e) => handleChange(e, setFormData)} required />
                                <input type="text" name='city' placeholder='Город' onChange={(e) => handleChange(e, setFormData)} required />
                                <input type="text" name='street' placeholder='Улица' onChange={(e) => handleChange(e, setFormData)} required />
                                <input type="text" name='house' placeholder='Дом' onChange={(e) => handleChange(e, setFormData)} required />
                                <input type="text" name='apartment' placeholder='Квартира' onChange={(e) => handleChange(e, setFormData)} required />
                            </div>
                            <div className="checkout-form">
                                <h3>Комментарии</h3>
                                <textarea placeholder='Мне понравился ваш сайт!' name="comment" id="comment" onChange={(e) => handleChange(e, setFormData)}></textarea>
                            </div>
                        </div>
                        <div className="checkout-order">
                            <div className="checkout-info">
                                <h3>Ваш заказ</h3>
                                <ul>
                                    <li><span>Товар</span><span>Всего</span></li>
                                    {renderCartProducts()}
                                    <li><span>Итого</span><span>${cartProducts.length ? calcTotalSum(cartProducts): 0}</span></li>
                                </ul>
                            </div>
                            <div className="checkout-actions">
                                <h3>Способы оплаты</h3>
                                <label className="checkbox-container">
                                    <input type="checkbox" readOnly checked/>
                                    <span className="checkmark"></span>
                                    Оплата наличными
                                </label>
                                <button className="action main" style={cartProducts.length ? {}: {pointerEvents: 'none', opacity: '0.5'}}>Разместить заказ</button>
                            </div>
                        </div>
                    </form>
                    ): <div></div>
                }
                {renderCheckoutSuccess()}   
                </div>
            </section>
            
        </>
    );
};