import React from 'react';
import { useSelector } from 'react-redux';
import { fetchCategories } from '../redux/filter/asyncAcrions';
import { setCategoryId, useCategories } from '../redux/filter/selectors';
import { fetchFilterChange } from '../redux/product/asyncActions';
import { ICategoryName } from '../redux/product/interfaces';
import { useAppDispatch } from '../redux/store';

export const Filter = () => {

    const dispatch = useAppDispatch();
    const { categoryData, categoryId, status } = useSelector(useCategories);

    React.useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    const renderCategories = () => {
        return categoryData.map((item, index) => <li className={index + 1 === categoryId ? `active`: ''} key={item._id} onClick={() => onChangeCategory({name: item.name}, index + 1)}>{item.name}</li>);
    }

    const onChangeCategory = (category: ICategoryName, index: number) => {
        dispatch(fetchFilterChange(category));
        dispatch(setCategoryId(index));
        localStorage.setItem('category-id', `${index}`);
        localStorage.setItem('category-name', `${category.name}`);
    }
    
    return (
        <div className='filters'>
            <div className="container">
                <ul className="filters-wrapper">
                    <li onClick={() => onChangeCategory({name: 'Все'}, 0)} key={-1} className={0 === categoryId ? `active`: ''}>Все</li>
                    {status === 'loading'?'': renderCategories()}
                </ul>
            </div>
        </div>
    );
};