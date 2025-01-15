import React, { useEffect } from 'react';
import NavBar from '../components/NavBar/NavBar';
import { HomePageImage } from '../components/HomePageImage/HomePageImage';
import CardSection from '../components/CardSection/CardSection';
import './HomePage.css';
import HomepageImage2 from '../components/HomepageImage2/HomepageImage2';
import FAQs from '../components/FAQs/FAQs';
import Footer from '../components/footer/footer'


const HomePage = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <NavBar />
      <HomePageImage />
      <CardSection />
      <HomepageImage2/>
      <FAQs/>
      <Footer/>
      

      
    </>
  );
};

export default HomePage;
