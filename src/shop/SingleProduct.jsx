import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Data from '../products.json';
import PageHeader from '../components/PageHeader';

const SingleProduct = () => {
    const [product, setProduct] = useState([]);

    const { id } = useParams();
    // console.log(id);

    useEffect(() => {
        fetch('../products.json')
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, []);
    // console.log(product);

    return (
        <div>
            <PageHeader title={'OUR SINGLE PAGE'} curPage={'Shop/Single Page'} />
            <div className="shop-single padding-tb aside-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-12">
                            <article>
                                <div className="product-details">
                                    <div className="row align-items-center">
                                        <div className="col-md-6 col-12">Images</div>
                                        <div className="col-md-6 col-12">Details</div>
                                    </div>
                                </div>
                                {/* Review */}
                                <div className="review">Review</div>
                            </article>
                        </div>
                        {/* right side */}
                        <div className="col-lg-4 col-12">Right Side</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
