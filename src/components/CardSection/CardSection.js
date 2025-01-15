import React, { useState } from 'react';
import "./CardSection.css";
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const CardSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const cards = [
        { src: assets.goa, title: "Goa", subtitle: "Coastal Paradise" },
        { src: assets.ladakh, title: "Ladakh", subtitle: "Majestic Peaks" },
        { src: assets.kerala, title: "Kerala", subtitle: "Green Haven" },
        { src: assets.jaipur, title: "Jaipur", subtitle: "Pink City" },
        { src: assets.mumbai, title: "Mumbai", subtitle: "City of Dreams" },
        { src: assets.delhi, title: "Delhi", subtitle: "Historic Capital" }
    ];

    const cardsPerSet = 3;
    const currentCards = cards.slice(currentIndex, currentIndex + cardsPerSet);

    const handleNext = () => {
        if (currentIndex + cardsPerSet < cards.length) {
            setCurrentIndex(currentIndex + cardsPerSet);
        }
    };

    const handlePrev = () => {
        if (currentIndex - cardsPerSet >= 0) {
            setCurrentIndex(currentIndex - cardsPerSet);
        }
    };

    return (
        <div className='cardsection'>
            <div className="categories">
                <button>View All</button>
                <button>Popular Categories</button>
                <button>Popular Destination</button>
                <button>Popular Experiences</button>
                <button>Group Experiences</button>
            </div>
            <hr />

            <div className="newly-added">
                <div>
                    <h3>Popular Picks</h3>
                    <p>Check out the most popular destinations loved by visitors and celebrated for their unique charm.</p>
                </div>
                <div className="buttons">
                    {/* <button className="view-all">View All</button> */}
                    <button onClick={handlePrev}>﹤</button>
                    <button onClick={handleNext}>﹥</button>
                </div>
            </div>

            <div className="cards-container">
                <div className="cards">
                    {currentCards.map((card, index) => (
                        <div className="card" key={index}>
                            <img src={card.src} className="card-img-top" alt={card.title} />
                            <div className="cardInfo">
                                <h3>{card.title}</h3>
                                <h5>{card.subtitle}</h5>
                            </div>
                            <div className="seeMoreButton">
                                <button>See More</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="newly-added">
                <div>
                    <h3>Your Perfect Stay Awaits</h3>
                    <p>Explore top-rated stays that make every trip special and ensure a comfortable escape.</p>
                </div>
                <div className="buttons">
                    <Link to='/stays'><button className="view-all">View All</button></Link>
                </div>

                <div className="cards2">
                    
                    <div className="card">
                        <img src={assets.hotel} className="card-img-top" alt="Hotel"/>
                        <div className="card-body">
                            <h2>Hotel</h2>
                        </div>
                    </div>
                    <div className="card">
                        <img src={assets.villa} className="card-img-top" alt="Villa"/>
                        <div className="card-body">
                            <h2>Villa</h2>
                        </div>
                    </div>
                    <div className="card">
                        <img src={assets.homestay} className="card-img-top" alt="Homestay"/>
                        <div className="card-body">
                            <h2>Homestay</h2>
                        </div>
                    </div>

                    <div className="card">
                        <img src={assets.hostel} className="card-img-top" alt="Hostel"/>
                        <div className="card-body">
                            <h2>Hostel</h2>
                        </div>
                    </div>

                    <div className="card">
                        <img src={assets.petFriendly} className="card-img-top" alt="Pet Friendly"/>
                        <div className="card-body">
                            <h2>Pet Friendly</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardSection;


