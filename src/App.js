import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;
