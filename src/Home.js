
import React from 'react';
import './Home.css'; 
import Line from './charts/Line';
import Hoi from './charts/Hoi';
import Buble from './charts/Buble';
import Surface from './charts/Surface';
import Navbar from './home/Navbar';
import Hero from './home/Hero';
import Info from './home/Info';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from './home/Footer';
const Home = () => {
   
  return (
    <div> <Navbar/>
    <Hero/>
    <Info/>
    <Footer/>
  
    </div>
  );
};

export default Home;
