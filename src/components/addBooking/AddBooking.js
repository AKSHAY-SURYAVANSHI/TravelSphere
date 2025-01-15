import axios from 'axios';
import './addBooking.css';
import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../Context/authContext';

const AddBooking = () => {
  const { id } = useParams();
  const [room, setRooms] = useState({});
  const { isLogged, user } = useContext(AuthContext);

  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [numberOfGuests, setNumberOfGuests] = useState('');

  useEffect(() => {
    if (id) {
      roomById();
    }
  }, [id]);

  const roomById = () => {
    axios.get(`http://localhost:8080/room/read/${id}`)
      .then(response => {
        setRooms(response.data);
        console.log(user[0].user_id);
      })
      .catch(error => {
        console.error("There was an error fetching the room!", error);
      });
  };

  const handleBooks = (e) => {
    e.preventDefault();

    if (!checkInDate || !checkOutDate || !numberOfGuests || !user) {
      alert('Please fill in all the fields and make sure you are logged in.');
      return;
    }

    alert('Booking Successful')

    const user_id = user[0].user_id;

    axios.post("http://localhost:8080/booking/add", {
      user: { user_id },
      hotel: { id: room.hotel.id },
      room: { id: room.id },
      checkInDate,
      checkOutDate,
      numberOfGuests,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.error("Error creating booking:", error);
    });
  };

  return (
    <div className="add-booking-container">
      <h1 className='ml-9'>BOOKING DETAILS</h1>
      <div className="booking-table">
        <div className="booking-table-header">Detail</div>
        <div className="booking-table-header">Information</div>

        <div className="booking-table-cell">Hotel Name</div>
        <div className="booking-table-cell">{room.hotel?.name}</div>

        <div className="booking-table-cell">Hotel Type</div>
        <div className="booking-table-cell">{room.hotel?.type}</div>

        <div className="booking-table-cell">Address</div>
        <div className="booking-table-cell">{room.hotel?.address}</div>

        <div className="booking-table-cell">City</div>
        <div className="booking-table-cell">{room.hotel?.city}</div>

        <div className="booking-table-cell">State</div>
        <div className="booking-table-cell">{room.hotel?.state}</div>

        <div className="booking-table-cell">Phone</div>
        <div className="booking-table-cell">{room.hotel?.phone}</div>

        <div className="booking-table-cell">Room Type</div>
        <div className="booking-table-cell">{room.type}</div>

        <div className="booking-table-cell">Capacity</div>
        <div className="booking-table-cell">{room.capacity}</div>

        <div className="booking-table-cell">Price</div>
        <div className="booking-table-cell">${room.price}</div>
      </div>

      <div className="input-container">
        <label htmlFor="checkInDate" className="label">Check-in Date</label>
        <input
          id="checkInDate"
          type="date"
          onChange={(e) => setCheckInDate(e.target.value)}
          value={checkInDate}
        />
      </div>
      
      <div className="input-container">
        <label htmlFor="checkOutDate" className="label">Check-out Date</label>
        <input
          id="checkOutDate"
          type="date"
          onChange={(e) => setCheckOutDate(e.target.value)}
          value={checkOutDate}
        />
      </div>

      <div className="input-container">
        <label htmlFor="numberOfGuests" className="label">Number of Rooms</label>
        <input
          id="numberOfGuests"
          type="number"
          onChange={(e) => setNumberOfGuests(e.target.value)}
          value={numberOfGuests}
        />
      </div>

      <button
        onClick={handleBooks}
        disabled={!checkInDate || !checkOutDate || !numberOfGuests || !user}
      >
        CONFIRM BOOKING
      </button>
    </div>
  );
};

export default AddBooking;
