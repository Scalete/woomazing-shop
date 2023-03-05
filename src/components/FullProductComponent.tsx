import React from 'react';
import { ProductItem } from '../redux/product/interfaces';

export const FullProductComponent: React.FC<ProductItem> = ({_id, imgUrl, title, price, discount}) => {

    return (
        <div className="container">
            <div className='full-product'>
                <img src={imgUrl} alt="Product" />
                <div className="full-product-wrapper">
                    <div className="price-wrapper">
                        <span className="price">${price}</span>
                        <span className="discount">{discount ? '$' + discount: ''}</span>
                    </div>
                    <div className="size-wrapper">
                        <div className="title">Выберите размер</div>
                        <ul>
                            <li>
                                <input type="radio" name="size" value="S"/>
                                <label>S</label>
                            </li>
                            <li>
                                <input type="radio" name="size" value="M"/>
                                <label>M</label>
                            </li>
                            <li>
                                <input type="radio" name="size" value="L"/>
                                <label>L</label>
                            </li>
                            <li>
                                <input type="radio" name="size" value="XL"/>
                                <label>XL</label>
                            </li>
                            <li>
                                <input type="radio" name="size" value="XXL"/>
                                <label>XXL</label>
                            </li>
                        </ul>
                    </div>
                    <div className="color-wrapper">
                        <div className="title">Выберите цвет</div>
                        <ul>
                            <li>
                                <input type="radio" name="color" value="brown" className='brown'/>
                            </li>
                            <li>
                                <input type="radio" name="color" value="gray" className='gray'/>
                            </li>
                            <li>
                                <input type="radio" name="color" value="red" className='red'/>
                            </li>
                            <li>
                                <input type="radio" name="color" value="orange" className='orange'/>
                            </li>
                        </ul>
                    </div>
                    <div className="action-wrapper">
                        <input type="number" min="1" max="99" value={1}/>
                        <button className="action main">Добавить в корзину</button>
                    </div>
                </div>
            </div>
        </div>
    );
};