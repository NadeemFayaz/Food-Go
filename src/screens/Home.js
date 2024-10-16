import React from 'react';
import Footer from './Footer';
import './Home.css'; // Import the CSS file
import Card from '../components/Card';
import Carousel from '../components/Carousel';

export default function Home() {
  return (
    <div>
     <div><Carousel /></div> 
      <Card />
      <Card />
      <Footer />
    </div>
  );
}