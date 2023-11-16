/* eslint-disable react/prop-types */
import React from 'react';

const Pagination = ({ activePage, totalProducts, handlePageChange, productPerPage }) => {
    const pageNumber = [];
    console.log(pageNumber);
    for (let i = 1; i <= Math.ceil(totalProducts / productPerPage); i++) {
        pageNumber.push(i);
    }

    return (
        <div>
            <h1>pagination</h1>
        </div>
    );
};

export default Pagination;
