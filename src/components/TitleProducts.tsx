import React from 'react';
import { useSelector } from 'react-redux';
import { ITitleProductsProps } from '../redux/globalIntefaces';
import { useProducts } from '../redux/product/selectors';
import { useAppDispatch } from '../redux/store';
import { Product } from './Product';
import Skeleton, { skeletonProductOptions } from './Skeleton/Skeleton';

export const TitleProducts: React.FC<ITitleProductsProps> = ({title, asyncFunc, button}) => {

    const dispatch = useAppDispatch();
    const { productsData, status } = useSelector(useProducts);

    React.useEffect(() => {
        dispatch(asyncFunc());
    }, [dispatch, asyncFunc]);

    const renderProducts = () => {
        return productsData.map(item => <Product key={item._id} _id={item._id} imgUrl={item.imgUrl} title={item.title} price={item.price} discount={item.discount} />);
    }

    return (
        <section id="title-products" className="title-products" style={!button ? {marginBottom: '0px', marginTop: '100px'}: {}}>
            <div className="container">
                <h2 className='second-title'>{title}</h2>
                <ul className="title-products-wrapper">
                    {status === 'loading' ? new Array(3).fill('').map((__, i) => <Skeleton key={i} width={skeletonProductOptions.width} height={skeletonProductOptions.height} elementsArr={skeletonProductOptions.elementsArr}/>) : renderProducts()}
                </ul>
                {button}
            </div>
        </section>
    );
};