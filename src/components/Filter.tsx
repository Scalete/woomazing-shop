import React from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../redux/store';
import { fetchCategories, setCategoryId, useCategories } from '../redux/slices/categoriesSlice'
import { fetchCategoryChange, ICategoryName } from '../redux/slices/productsSlice'

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
        dispatch(fetchCategoryChange(category));
        dispatch(setCategoryId(index));
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