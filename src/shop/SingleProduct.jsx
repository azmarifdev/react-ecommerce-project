import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Data from '../products.json';

const SingleProduct = () => {
    const [product, setProduct] = useState(Data);

    const { id } = useParams();
    console.log(product);
    console.log(id);

    useEffect(() => {
        fetch('../products.json')
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, []);
    console.log(product);

    return <div>SingleProduct</div>;
};

export default SingleProduct;
