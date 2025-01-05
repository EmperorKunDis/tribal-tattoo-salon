import React from 'react';
import { motion } from 'framer-motion';
import { FaFeather } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <FaFeather className="hero-icon" />
        <h1>Sacred Ink Tribal</h1>
        <p>Where tradition meets modern artistry</p>
        <motion.button 
          className="cta-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Book Now
        </motion.button>
      </motion.div>
      <div className="tribal-pattern"></div>
    </section>
  );
};

export default Hero;
