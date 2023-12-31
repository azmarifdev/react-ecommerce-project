import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import Data from '../products.json';
import ProductCards from './ProductCards';
import Pagination from './Pagination';
import Search from './Search';
import ShopCategory from './ShopCategory';
import PopularPost from './PopularPost';
import Tags from './Tags';

const showResult = 'Showing 01 - 12 of 139 Results';

const Shop = () => {
    const [GridList, setGridList] = useState(true);
    const [products, setProducts] = useState(Data);

    const [currentPage, setCurrentPage] = useState(1);
    const productPerPage = 12;
    const indexOfLastProduct = productPerPage * currentPage;
    const indexOfFirstProduct = indexOfLastProduct - productPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const [selectedCategory, setSelectedCategory] = useState('All');
    const menuItems = [...new Set(Data.map((Val) => Val.category))];
    // console.log(menuItems);

    const filterItem = (proCat) => {
        const newItem = Data.filter((newVal) => newVal.category === proCat);
        setSelectedCategory(proCat);
        setProducts(newItem);
    };

    return (
        <div>
            <PageHeader title={'Our Shop Page'} curPage={'Shop'} />
            {/* shop page */}
            <div className="shop-page padding-tb">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-12">
                            <article>
                                {/* layout and title here */}
                                <div className="shop-title d-flex flex-wrap justify-content-between">
                                    <p>{showResult}</p>
                                    <div className={`product-view-mode ${GridList ? 'gridActive' : 'listActive'}`}>
                                        <a className="grid" onClick={() => setGridList(!GridList)}>
                                            <i className="icofont-ghost"></i>
                                        </a>
                                        <a className="list" onClick={() => setGridList(!GridList)}>
                                            <i className="icofont-listine-dots"></i>
                                        </a>
                                    </div>
                                </div>
                                {/* products cards */}
                                <div>
                                    <ProductCards gridList={GridList} products={currentProducts} />
                                </div>
                                <Pagination
                                    productPerPage={productPerPage}
                                    totalProducts={products.length}
                                    handlePageChange={handlePageChange}
                                    activePage={currentPage}
                                />
                            </article>
                        </div>
                        <div className="col-lg-4 col-12">
                            <aside>
                                <Search products={products} GridList={GridList} />
                                <ShopCategory
                                    filterItem={filterItem}
                                    selectedCategory={selectedCategory}
                                    menuItems={menuItems}
                                    setProducts={setProducts}
                                    setSelectedCategory={setSelectedCategory}
                                />
                                <PopularPost />
                                <Tags />
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
