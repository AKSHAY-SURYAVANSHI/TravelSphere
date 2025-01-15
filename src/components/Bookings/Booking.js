import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Booking.css'; // Import the custom CSS

const Booking = () => {
  const [bookings, setBookings] = useState([]);
  const [editing, setEditing] = useState(null); // Track the booking being edited
  const [editData, setEditData] = useState({}); // Store the data to be edited

  useEffect(() => {
    displayBookings();
  }, []);

  const displayBookings = () => {
    axios.get('http://localhost:8080/booking/read')
      .then(response => {
        setBookings(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the bookings!", error);
      });
  };

  const handleEditClick = (booking) => {
    setEditing(booking.id);
    setEditData({
      checkInDate: booking.checkInDate,
      checkOutDate: booking.checkOutDate,
      numberOfGuests: booking.numberOfGuests
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const saveBooking = (id) => {
    const updatedBookings = bookings.map(booking =>
      booking.id === id ? { ...booking, ...editData } : booking
    );
    setBookings(updatedBookings); // Optimistic UI update

    axios.put(`http://localhost:8080/booking/update/${id}`, editData)
      .then(() => {
        setEditing(null);
        // Optionally, refetch bookings to ensure data consistency
        // displayBookings();
      })
      .catch(error => {
        console.error("There was an error updating the booking!", error);
        // Optionally, handle rollback or error state
      });
  };

  const deleteBooking = (id) => {
    axios.delete(`http://localhost:8080/booking/delete/${id}`)
      .then(() => {
        setBookings(bookings.filter(booking => booking.id !== id));
      })
      .catch(error => {
        console.error("There was an error deleting the booking!", error);
      });
  };

  return (
    <>
      <h2>BOOKING HISTORY</h2>
      <div className="table-container">
        <div className="table-header">
          <div className="table-cell">Hotel Name</div>
          <div className="table-cell">Room Type</div>
          <div className="table-cell">Price</div>
          <div className="table-cell">Check-In Date</div>
          <div className="table-cell">Check-Out Date</div>
          <div className="table-cell">Number of Guests</div>
          <div className="table-cell">Actions</div>
        </div>
        {bookings.map((booking) => (
          <div key={booking.id} className="table-row">
            <div className="table-cell">{booking.hotel?.name}</div>
            <div className="table-cell">{booking.room?.type}</div>
            <div className="table-cell">${(booking.room?.price * booking.numberOfGuests)}</div>
            {editing === booking.id ? (
              <>
                <div className="table-cell">
                  <input
                    type="date"
                    name="checkInDate"
                    value={editData.checkInDate}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="table-cell">
                  <input
                    type="date"
                    name="checkOutDate"
                    value={editData.checkOutDate}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="table-cell">
                  <input
                    type="number"
                    name="numberOfGuests"
                    value={editData.numberOfGuests}
                    onChange={handleInputChange}
                    min="1"
                  />
                </div>
                <div className="table-cell">
                  <button onClick={() => saveBooking(booking.id)}>Save</button>
                  <button onClick={() => setEditing(null)}>Cancel</button>
                </div>
              </>
            ) : (
              <>
                <div className="table-cell">{booking.checkInDate}</div>
                <div className="table-cell">{booking.checkOutDate}</div>
                <div className="table-cell">{booking.numberOfGuests}</div>
                <div className="table-cell">
                  <button onClick={() => handleEditClick(booking)}>Edit</button>
                  <button onClick={() => deleteBooking(booking.id)}>Delete</button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      <div className="make-payment-container">
        <button className="make-payment-button">Make Payment</button>
      </div>
    </>
  );
};

export default Booking;
