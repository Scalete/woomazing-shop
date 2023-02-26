import React from 'react';
import { fetchProducts, useProducts } from '../redux/slices/productsSlice';
import { useAppDispatch } from '../redux/store';
import { useSelector } from 'react-redux';
import { Product } from './Product';

export const Products = () => {

    const dispatch = useAppDispatch();
    const { productsData, status } = useSelector(useProducts);

    React.useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const renderProducts = () => {
        return productsData.map((item) => {
            return <Product key={item._id} imgUrl={item.imgUrl} title={item.title} price={item.price} discount={item.discount}/>
        });
    }

    return (
        <section className='products'>
            <div className="container">
                <span>Показано: {productsData.length} из 12 товаров</span>
                <ul className="products-wrapper">
                    {status === 'loading' ? '' : renderProducts()}
                </ul>
                <span>Показано: {productsData.length} из 12 товаров</span>
            </div>
        </section>
    );
};