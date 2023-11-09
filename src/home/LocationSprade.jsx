import { Link } from 'react-router-dom';

const title = (
    <h2 className="title">
        More Then <span className="yellow-color">60,000</span> Customers
    </h2>
);
const desc =
    'Buy products on your any device with our app & enjoy your time what you want. Just download & install & start to shopping';

const clientsList = [
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'From US',
    },
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'From Canada',
    },
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'From Bangladesh',
    },
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'From Russia',
    },
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'From India',
    },
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'From England',
    },
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'From Palestinians',
    },
];
const LocationSprade = () => {
    return (
        <div className="clients-section style-2 padding-tb">
            <div className="container">
                <div className="section-header text-center">
                    {title}
                    <p>{desc}</p>
                </div>
                <div className="section-wrapper">
                    <div className="clients">
                        {clientsList.map((val, i) => (
                            <div className="client-list" key={i}>
                                <Link to="/signup" className="client-content">
                                    <span>{val.text}</span>
                                </Link>
                                <div className="client-thumb">
                                    <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LocationSprade;