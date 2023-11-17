/* eslint-disable react/prop-types */
import React from 'react';

const Pagination = ({ activePage, totalProducts, handlePageChange, productPerPage }) => {
    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(totalProducts / productPerPage); i++) {
        pageNumber.push(i);
    }

    return (
        <div>
            <ul className="default-pagination lab-ul">
                <li>
                    <a
                        onClick={() => {
                            if (activePage > 1) {
                                handlePageChange(activePage - 1);
                            }
                        }}>
                        <i className="icofont-rounded-left"></i>
                    </a>
                </li>
                {pageNumber.map((number) => (
                    <li key={number} className={`page-item ${number === activePage ? 'bg-warning' : ''}`}>
                        <button onClick={() => handlePageChange(number)} className="bg-transparent">
                            {number}
                        </button>
                    </li>
                ))}
                <li>
                    <a
                        onClick={() => {
                            if (activePage !== pageNumber.length) {
                                handlePageChange(activePage + 1);
                            }
                        }}>
                        <i className="icofont-rounded-right"></i>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Pagination;
