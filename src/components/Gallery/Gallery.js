import React from 'react';
import { motion } from 'framer-motion';
import './Gallery.css';

const galleryItems = [
  {
    id: 1,
    title: 'Tribal Sleeve',
    description: 'Polynesian inspired full sleeve design',
    image: 'https://images.pexels.com/photos/1231364/pexels-photo-1231364.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 2,
    title: 'Back Piece',
    description: 'Maori influenced back tattoo',
    image: 'https://images.pexels.com/photos/955938/pexels-photo-955938.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 3,
    title: 'Chest Design',
    description: 'Celtic tribal chest piece',
    image: 'https://images.pexels.com/photos/1765033/pexels-photo-1765033.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 4,
    title: 'Shoulder Cap',
    description: 'Aztec inspired shoulder design',
    image: 'https://images.pexels.com/photos/1893525/pexels-photo-1893525.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 5,
    title: 'Leg Sleeve',
    description: 'Indonesian tribal leg piece',
    image: 'https://images.pexels.com/photos/1750200/pexels-photo-1750200.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 6,
    title: 'Arm Band',
    description: 'Traditional tribal armband',
    image: 'https://images.pexels.com/photos/1876876/pexels-photo-1876876.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Our Masterpieces
      </motion.h2>
      <div className="gallery-grid">
        {galleryItems.map((item) => (
          <motion.div
            key={item.id}
            className="gallery-item"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="gallery-image">
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="gallery-overlay">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
