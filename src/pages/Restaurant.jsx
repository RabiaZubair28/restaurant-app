import React from 'react'
import Banner from '../components/Banner';
import Brands from '../components/Brands';
import Footer from '../components/Footer';
import ButtonsCarousel from '../components/ButtonsCarousel';
import Reviews from '../components/Reviews';
import MobileSection from '../components/MobileSection';
import RegisterSection from '../components/RegisterSection';
import CardSection from '../components/CardSection';
import Working from '../components/Working';
import BrandCards from '../components/BrandCards';
import { Navbar } from '../components/Navbar';

const Restaurant = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <BrandCards />
      <Working />
      <Brands />
      <ButtonsCarousel />
      <Reviews />
      <MobileSection />
      <RegisterSection />
      <CardSection />
      <Footer />
    </div>
  )
}

export default Restaurant