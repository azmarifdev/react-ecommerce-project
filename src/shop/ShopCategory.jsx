/* eslint-disable react/prop-types */
import React from 'react';
const title = 'All Categories';
import Data from '../products.json';

const ShopCategory = ({ filterItem, selectedCategory, menuItems, setProducts, setSelectedCategory }) => {
    // console.log(filterItem);
    // console.log(selectedCategory);
    // console.log(menuItems);
    // console.log(setProducts);
    const handleAllCat = () => {
        setSelectedCategory('All');
        setProducts(Data);
    };
    return (
        <>
            <div className="widget-header">
                <h5 className="ms-2">{title}</h5>
            </div>
            <div>
                <button onClick={() => handleAllCat()} className={`m-2 ${selectedCategory === 'All' ? 'bg-warning' : ''}`}>
                    All
                </button>

                {menuItems.map((cat, i) => (
                    <button
                        className={`m-2 ${selectedCategory === cat ? 'bg-warning' : ''}`}
                        onClick={() => filterItem(cat)}
                        key={i}>
                        {cat}
                    </button>
                ))}
            </div>
        </>
    );
};

export default ShopCategory;
