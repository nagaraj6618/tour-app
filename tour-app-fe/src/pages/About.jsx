import React from 'react';
import './about.css'; // Import the CSS file
import MemoryImagesGallery from '../components/image-gallery/MemoryImagesGallery';
import Testimonials from '../components/Testimonial/Testimonials';
import ServiceList from '../services/ServiceList';

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">About Our Tour Guide Services</h2>
      <p className="about-description">
        Welcome to our tour guide website! We are passionate about providing you with the best travel experiences and adventures.
      </p>
      <p className="about-description">
        Our team of knowledgeable and experienced tour guides is here to make your journey memorable. Whether you're a solo traveler, a couple, or a group, we tailor our tours to meet your interests and preferences.
      </p>
      <p className="about-description">
        Discover new places, explore diverse cultures, and create lasting memories with us. Join us for an unforgettable adventure!
      </p>
      <div>
      <ServiceList/>
        <MemoryImagesGallery/>
        <Testimonials/>
        
      </div>
    </div>
  );
}

export default About;
