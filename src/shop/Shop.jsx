import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
const showResult = 'Showing 01 - 12 of 139 Results';
const Shop = () => {
    const [GridList, setGridList] = useState(true);

    console.log(GridList);
    return (
        <div>
            <PageHeader title={'Our Shop Page'} curPage={'Shop'} /> 
            {/* shop page */}
            <div className="shop-page padding-tb">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-12">
                            <article>
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
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
