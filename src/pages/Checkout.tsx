import React from 'react';
import { TitleBreadcrumbs } from '../components/TitleBreadcrumbs';

export const Checkout: React.FC = () => {
    return (
        <>
            <TitleBreadcrumbs title='Оформление заказа' breadcrumbs={[{link: '/', name: 'Главная'}, {link: '/checkout', name: 'Оформление заказа'}]}/>
            <section className="checkout">
                <div className="container">
                    <form>
                        <div className="checkout-details">
                            <div className="checkout-form">
                                <h3>Данные покупателя</h3>
                                <input type="text" name="name" placeholder='Имя' required />
                                <input type="email" name="email" placeholder='E-mail' required />
                                <input type="text" name="tel" placeholder='Телефон' required />
                            </div>
                            <div className="checkout-form">
                                <h3>Адрес получателя</h3>
                                <input type="text" name='country' placeholder='Страна' required />
                                <input type="text" name='city' placeholder='Город' required />
                                <input type="text" name='street' placeholder='Улица' required />
                                <input type="text" name='house' placeholder='Дом' required />
                                <input type="text" name='apartment' placeholder='Квартира' required />
                            </div>
                            <div className="checkout-form">
                                <h3>Комментарии</h3>
                                <textarea placeholder='Мне понравился ваш сайт!' name="message" id="message"></textarea>
                            </div>
                        </div>
                        <div className="checkout-order">
                            <div className="checkout-info">
                                <h3>Ваш заказ</h3>
                                <ul>
                                    <li><span>Товар</span><span>Всего</span></li>
                                    <li><span>Футболка USA</span><span>$129</span></li>
                                </ul>
                            </div>
                            <div className="checkout-actions">
                                <h3>Способы оплаты</h3>
                                <input type="text" />
                                <button className="action main">Разместить заказ</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};