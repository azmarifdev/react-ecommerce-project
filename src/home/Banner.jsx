import React, { useState } from 'react';
import productData from '../products.json';
import { Link } from 'react-router-dom';
import SelectedCategory from '../components/SelectedCategory';

const title = (
    <h2>
        Search Your One From <span>Thousand</span> of Product
    </h2>
);
const desc = 'we have the largest collection of products';
const bannerList = [
    {
        iconName: 'icofont-users-alt-4',
        text: '1.5 Million Customers',
    },
    {
        iconName: 'icofont-notification',
        text: 'More then 2000 Marchent',
    },
    {
        iconName: 'icofont-globe',
        text: 'Buy Anything Online',
    },
];
function Banner() {
    const [searchInputs, setSearchInputs] = useState('');
    const [filterProducts, setFilterProducts] = useState(productData);

    const handleSearch = (e) => {
        const searchTerm = e.target.value;
        setSearchInputs(searchTerm);
        // console.log(searchTerm);

        const filtered = productData.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilterProducts(filtered);
    };

    // console.log(filterProducts);

    return (
        <div className="banner-section style-4">
            <div className="container">
                <div className="banner-content">
                    {title}
                    <form>
                        <SelectedCategory select={'all'} />
                        <input
                            type="search"
                            name="search"
                            id="search"
                            placeholder="Search Your Product"
                            value={searchInputs}
                            onChange={handleSearch}
                        />
                        <button type="submit">
                            <i className="icofont-ui-search"></i>
                        </button>
                    </form>
                    <p>{desc}</p>
                    <ul className="lab-ul">
                        {searchInputs &&
                            filterProducts.map((product, i) => (
                                <li key={i}>
                                    <Link to={`/shop/${product.id}`}>{product.name}</Link>
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Banner;
