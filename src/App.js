// App.js
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/hero';
import Features from './components/features';
import CallToAction from './components/CallToAction';
import About from './components/About';
import Footer from './components/footer'; // مسار الاستيراد الصحيح
import './styles.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <CallToAction />
      <About />
      <Footer />
    </div>
  );
}

export default App;