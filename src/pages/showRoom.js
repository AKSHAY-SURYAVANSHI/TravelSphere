import React from 'react'
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/footer/footer'
import RoomCards from '../components/roomCards/RoomCards';

const showRoom = () => {
  return (
    <>
    <NavBar/>
    <RoomCards/>
    <Footer/>
    </>
  )
}

export default showRoom