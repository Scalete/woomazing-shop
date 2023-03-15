import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { TitleBreadcrumbs } from '../components/TitleBreadcrumbs';
import { clearCart, useCartProducts } from '../redux/cart/selectors';
import { Status } from '../redux/globalIntefaces';
import { postOrder } from '../redux/order/asyncActions';
import { IFormDataCheckout } from '../redux/order/interface';
import { resetStatus, useOrders } from '../redux/order/selectors';
import { useAppDispatch } from '../redux/store';
import { calcTotalSum, calculateDiscount } from '../utils/helperFunctions';
import { Empty } from './Empty';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

export const Checkout: React.FC = () => {

    const { cartProducts } = useSelector(useCartProducts);
    const { status } = useSelector(useOrders);
    const dispatch = useAppDispatch();
    const isOrder = React.useRef<boolean>(false);

    const schema = yup.object().shape({
        name: yup.string().min(2, "Имя должно содержать минимум 2 буквы").required("Введите имя"),
        email: yup.string().email("Введите корректный e-mail").max(30, "Максимальное количество символов: 30").required("Введите e-mail"),
        tel: yup.string().matches(/^\+?\d{1,4}[-.\s]?\d{1,20}$/, "Введите корректный телефон").required("Введите телефон"),
        country: yup.string().max(30, "Максимальное количество символов: 30").required("Введите страну"),
        city: yup.string().max(30, "Максимальное количество символов: 30").required("Введите город"),
        street: yup.string().required("Введите улицу"),
        house: yup.string().matches(/^\d+$/, "Дом должен содержать только цифры").required("Введите номер дома"),
        apartment: yup.string().matches(/^\d+$/, "Квартира должна содержать только цифры").required("Введите номер квартиры"),
        comment: yup.string().max(100, "Максимальное количество символов: 100"),
    });

    const { register, handleSubmit, reset, formState: { errors } } = useForm<IFormDataCheckout>({
        defaultValues: {
            name: '',
            email: '',
            tel: '',
            country: '',
            city: '',
            street: '',
            house: '',
            apartment: '',
            comment: ''
        },
        resolver: yupResolver(schema)
    });

    const renderCartProducts = () => {
        return cartProducts?.map((item, i) => <li key={i}><span>{item.product.title}</span><span>${item.product.discount ? item.count * calculateDiscount(item.product.price, item.product.discount): item.count * item.product.price}</span></li>);
    }

    const renderCheckoutSuccess = () => {
        if (isOrder.current) {
            return (
                <div className="checkout-success">
                    <svg width="72" height="84" viewBox="0 0 72 84" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M53.122 30.876a2.999 2.999 0 0 1 0 4.248l-18 18a2.998 2.998 0 0 1-4.248 0l-9-9a3.004 3.004 0 0 1 4.248-4.248l6.876 6.882 15.876-15.882a3 3 0 0 1 4.248 0Z" fill="#6E9C9F"/><path fillRule="evenodd" clipRule="evenodd" d="M12 0h48a12 12 0 0 1 12 12v60a12 12 0 0 1-12 12H12A12 12 0 0 1 0 72V12A12 12 0 0 1 12 0Zm0 6a6 6 0 0 0-6 6v60a6 6 0 0 0 6 6h48a6 6 0 0 0 6-6V12a6 6 0 0 0-6-6H12Z" fill="#6E9C9F"/></svg>
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
            reset();
        }
        dispatch(resetStatus());
    }, [dispatch, status, reset]);

    const onHandleSubmit = (data: IFormDataCheckout) => {

        if (status !== Status.SUCCES) {
            dispatch(postOrder({
                userInfo: {
                    name: data.name,
                    email: data.email,
                    tel: data.tel,
                },
                userAdress: {
                    country: data.country,
                    city: data.city,
                    street: data.street,
                    house: data.house,
                    apartment: data.apartment,
                },
                comment: data.comment,
                products: cartProducts
            }));
        }
    }

    return (
        <>
            <TitleBreadcrumbs title='Оформление заказа' breadcrumbs={[{link: '/', name: 'Главная'}, {link: '/checkout', name: 'Оформление заказа'}]}/>
                
            <section className="checkout">
                <div className="container">
                {!cartProducts.length && !isOrder.current? <Empty text='Добавте хоть один продукт в корзину'/>: cartProducts.length ?  (
                    <form className='main' onSubmit={handleSubmit(onHandleSubmit)}>
                        <div className="checkout-details">
                            <div className="checkout-form">
                                <h3>Данные покупателя</h3>
                                <div>
                                    <input type="text" placeholder='Имя' {...register('name', { required: true })} />
                                    {errors.name && <span>{`${errors.name.message}`}</span>}
                                </div>
                                <div>
                                    <input type="email" placeholder='E-mail' {...register('email', { required: true })} />
                                    {errors.email && <span>{`${errors.email.message}`}</span>}
                                </div>
                                <div>
                                    <input type="text" placeholder='Телефон' {...register('tel', { required: true })} />
                                    {errors.tel && <span>{`${errors.tel.message}`}</span>}
                                </div>
                            </div>
                            <div className="checkout-form">
                                <h3>Адрес получателя</h3>
                                <div>
                                    <input type="text" placeholder='Страна' {...register('country', { required: true })} />
                                    {errors.country && <span>{`${errors.country.message}`}</span>}
                                </div>
                                <div>
                                    <input type="text" placeholder='Город' {...register('city', { required: true })} />
                                    {errors.city && <span>{`${errors.city.message}`}</span>}
                                </div>
                                <div>
                                    <input type="text" placeholder='Улица' {...register('street', { required: true })} />
                                    {errors.street && <span>{`${errors.street.message}`}</span>}
                                </div>
                                <div>
                                    <input type="text" placeholder='Дом' {...register('house', { required: true })} />
                                    {errors.house && <span>{`${errors.house.message}`}</span>}
                                </div>
                                <div>
                                    <input type="text" placeholder='Квартира' {...register('apartment', { required: true })} />
                                    {errors.apartment && <span>{`${errors.apartment.message}`}</span>}
                                </div>
                            </div>
                            <div className="checkout-form">
                                <h3>Комментарии</h3>
                                <textarea placeholder='Комментарий' {...register('comment')} />
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
                    ): renderCheckoutSuccess()
                }
                </div>
            </section>
            
        </>
    );
};