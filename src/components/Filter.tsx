import React from 'react';
import { useSelector } from 'react-redux';
import { fetchCategories } from '../redux/categories/asyncActions';
import { setCategoryId, useCategories } from '../redux/categories/selectors';
import { fetchProducts } from '../redux/product/asyncActions';
import { setPagination } from '../redux/product/selectors';
import { useAppDispatch } from '../redux/store';
import Skeleton, { skeletonCategoryOptions } from './Skeleton/Skeleton';

export const Filter = () => {

    const dispatch = useAppDispatch();
    const { categoryData, categoryId, status } = useSelector(useCategories);

    React.useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    const renderCategories = () => {
        return categoryData.map((item, index) => <li className={index + 1 === categoryId ? `active`: ''} key={item._id} onClick={() => onChangeCategory(item.name, index + 1)}>{item.name}</li>);
    }

    const onChangeCategory = (category: string, index: number) => {
        const page = 1;
        dispatch(setCategoryId(index));
        dispatch(setPagination(1));
        dispatch(fetchProducts({category, page}));
        localStorage.setItem('category-id', `${index}`);
        localStorage.setItem('category-name', `${category}`);
    }
    
    return (
        <div className='filters'>
            <div className="container">
                <ul className="filters-wrapper">
                    <li onClick={() => onChangeCategory('Все', 0)} key={-1} className={0 === categoryId ? `active`: ''}>Все</li>
                    {status === 'loading'? new Array(4).fill('').map((__, i) => <Skeleton key={i} width={skeletonCategoryOptions.width} height={skeletonCategoryOptions.height} elementsArr={skeletonCategoryOptions.elementsArr}/>): renderCategories()}
                </ul>
            </div>
        </div>
    );
};