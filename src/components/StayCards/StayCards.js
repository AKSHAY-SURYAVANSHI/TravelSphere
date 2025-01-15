import React, { useEffect, useState } from 'react';
import './StayCards.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const StayCards = () => {
    const [stays, setStays] = useState([]);
    const [filteredStays, setFilteredStays] = useState([]);
    const [selectedType, setSelectedType] = useState('all');

    useEffect(() => {
        fetchStays();
    }, []);

    const fetchStays = () => {
        axios.get('http://localhost:8080/hotel/read')
            .then(response => {
                setStays(response.data);
                setFilteredStays(response.data); // Initialize filtered stays with all stays
                console.log(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the stays!", error);
            });
    };

    const handleTypeClick = (type) => {
        setSelectedType(type);

        if (type === 'all') {
            setFilteredStays(stays);
        } else {
            setFilteredStays(stays.filter(stay => stay.type === type));
        }
    };

    return (
        <div className="staycontainer">
            <div className="filter-container">
                <button onClick={() => handleTypeClick('all')}>All</button>
                <button onClick={() => handleTypeClick('hotel')}>Hotel</button>
                <button onClick={() => handleTypeClick('hostel')}>Hostel</button>
                <button onClick={() => handleTypeClick('homestay')}>Homestay</button>
                <button onClick={() => handleTypeClick('villa')}>Villa</button>
                <button onClick={() => handleTypeClick('pet_friendly')}>Pet Friendly</button>
            </div>

            <div className="cards-container1">
                {filteredStays.map((stay) => (
                    <div className="card1" key={stay.id}>
                        <img
                            src={stay.image} // Use stay.image for the image source
                            className="card-img-top1"
                            alt={stay.name}
                        />
                        <div className="cardInfo1">
                            <h3>{stay.name}</h3>
                            <div className="seeMoreButton1">
                                <ul>
                                    <li>Location: {stay.city}</li>
                                    <li>Rating: {stay.rating} / 5</li>
                                </ul>
                            </div>
                            <Link to={`/room/${stay.id}`}><button>Explore More</button></Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default StayCards;
    