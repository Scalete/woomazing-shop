import React from 'react';
import { TitleBreadcrumbs } from '../components/TitleBreadcrumbs';
import { FullProductComponent } from '../components/FullProductComponent';
import { TitleProducts } from '../components/TitleProducts';
import { fetchRelativeProducts } from '../redux/product/asyncActions';
import { useProduct } from '../redux/full-product/selectors';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../redux/store';
import { useLocation } from 'react-router-dom';
import { fetchProduct } from '../redux/full-product/asyncActions';
import { HelmetComponent } from '../components/HelmetComponent';

export const FullProduct: React.FC = () => {

    const dispatch = useAppDispatch();
    const { product } = useSelector(useProduct);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const _id = queryParams.get('_id') as string;

    React.useEffect(() => {
        dispatch(fetchProduct({_id: _id}));
    }, [dispatch, _id]);

    return (
        <>
            <HelmetComponent title={product.title} description={`Продукт: ${product.title}`}/>
            <TitleBreadcrumbs title={product.title} breadcrumbs={[{link: `${process.env.REACT_APP_HOME_URL}`, name: 'Главная'}, {link: `${process.env.REACT_APP_HOME_URL}shop`, name: 'Магазин'}, {link: `${process.env.REACT_APP_HOME_URL}`, name: product.title}]}/>
            <FullProductComponent _id={_id} imgUrl={process.env.REACT_APP_PUBLIC_URL + product.imgUrl} title={product.title} price={product.price} discount={product.discount} />
            <TitleProducts title='Связанные товары' asyncFunc={() => fetchRelativeProducts({_id: _id})}/>
        </>
    );
};