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
        </div>
    );
};

export default SingleProduct;
