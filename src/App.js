import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import LogInPage from './pages/LogInPage';
import HomePage from './pages/HomePage';
import ShowRoom from './pages/showRoom';
import Stays from './pages/stays';
import BookingPage from './pages/bookingpage';
import AddBookingPage from './pages/addBookingPage';
import { AuthProvider } from './Context/authContext';
import RoomCards from './components/roomCards/RoomCards';
import Booking from './components/Bookings/Booking';
import AddBooking from './components/addBooking/AddBooking';

function App() {
  return (
    <AuthProvider>
      <Routes>  
        <Route path='/' element={<HomePage />} />
        <Route path='/signin' element={<SignInPage />} />
        <Route path='/login' element={<LogInPage />} />
        <Route path='/stays' element={<Stays />} />
        <Route path='/room/:id' element={<ShowRoom />} />
        <Route path='/bookings' element={<BookingPage />} />
        <Route path='/addBooking/:id' element={<AddBookingPage />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;

