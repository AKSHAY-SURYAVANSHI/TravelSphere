import React, { useEffect, useState } from 'react';
import './roomCards.css';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const RoomCards = () => {
    const [rooms, setRooms] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        roomByHotel();
    }, []);

    const roomByHotel = () => {
        axios.get(`http://localhost:8080/room/hotel/${id}`)
            .then(response => {
                setRooms(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the rooms!", error);
            });
    };

    return (
        <div className="table-container">
            <header className="table-header">
                <h1>BOOK YOUR ROOM</h1>
                
            </header>

            <table className="room-table">
                <thead>
                    <tr>
                       
                        <th>ROOM TYPE</th>
                        <th>PRICE</th>
                        <th>ROOM CAPACITY</th>
                        <th>AVAILABILITY</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {rooms.map((room) => (

                        <tr key={room.id}>
                            <td>{room.type}</td>
                            <td>${room.price.toFixed(2)}</td>
                            <td>{room.capacity} people</td>
                            
                            <td>{room.available ? 'Available' : 'Not Available'}</td>
                            <td>
                                <Link to={`/addBooking/${room.id}`}>
                                    <button className="book-button">Book Now</button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default RoomCards;
