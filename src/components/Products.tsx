import React from 'react';
import { useAppDispatch } from '../redux/store';
import { useSelector } from 'react-redux';
import { Product } from './Product';
import { useProducts } from '../redux/product/selectors';
import { fetchProducts } from '../redux/product/asyncActions';
import { setCategoryId } from '../redux/categories/selectors';
import Skeleton, { skeletonProductOptions } from './Skeleton/Skeleton';

export const Products: React.FC = () => {

    const dispatch = useAppDispatch();
    const { productsData, status } = useSelector(useProducts);

    function isCategoryInLocalStorage() {
        return localStorage.getItem('category-name') && localStorage.getItem('category-id')? true: false;
    }

    React.useEffect(() => {
        dispatch(fetchProducts(isCategoryInLocalStorage() ? {category: localStorage.getItem('category-name'), page: 1}: {category: 'Все', page: 1}));
        dispatch(setCategoryId(isCategoryInLocalStorage() ? Number(localStorage.getItem('category-id')): 0));
    }, [dispatch]);

    const renderProducts = () => {
        return productsData.map((item) => <Product key={item._id} imgUrl={item.imgUrl} title={item.title} price={item.price} discount={item.discount}/>);
    }

    return (
        <section className='products'>
            <div className="container">
                <span>Показано: {productsData.length} из 12 товаров</span>
                <ul className="products-wrapper">
                    {status === 'loading' ? new Array(6).fill('').map((__, i) => <Skeleton key={i} width={skeletonProductOptions.width} height={skeletonProductOptions.height} elementsArr={skeletonProductOptions.elementsArr}/>) : renderProducts()}
                </ul>
                <span>Показано: {productsData.length} из 12 товаров</span>
            </div>
        </section>
    );
};