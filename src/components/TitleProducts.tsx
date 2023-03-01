import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchNewCollectionsProducts } from '../redux/product/asyncActions';
import { useProducts } from '../redux/product/selectors';
import { useAppDispatch } from '../redux/store';
import { Product } from './Product';
import Skeleton, { skeletonProductOptions } from './Skeleton/Skeleton';

export const TitleProducts: React.FC = () => {

    const dispatch = useAppDispatch();
    const { productsData, status } = useSelector(useProducts);

    React.useEffect(() => {
        dispatch(fetchNewCollectionsProducts());
    }, [dispatch]);

    const renderProducts = () => {
        return productsData.map(item => <Product key={item._id} imgUrl={item.imgUrl} title={item.title} price={item.price} discount={item.discount} />);
    }

    return (
        <section id="title-products" className="title-products">
            <div className="container">
                <h2 className='second-title'>Новая коллекция</h2>
                <ul className="title-products-wrapper">
                    {status === 'loading' ? new Array(3).fill('').map((__, i) => <Skeleton key={i} width={skeletonProductOptions.width} height={skeletonProductOptions.height} elementsArr={skeletonProductOptions.elementsArr}/>) : renderProducts()}
                </ul>
                <Link to="/shop" className="action second">Открыть магазин</Link>
            </div>
        </section>
    );
};