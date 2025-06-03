import React from 'react';
import './Buggati.css'; // Move styles to external CSS file

const Buggati = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">BUGATTI</div>
        <div>
          <a href="#">La Marque</a>
          <a href="#">Hyper Sports Cars</a>
          <a href="#">Lifestyle</a>
        </div>
      </nav>

      <section className="header">
        <h1>TOURBILLON</h1>
        <p>
          Conceived from a blank canvas, the TOURBILLON converges the immediate torque and
          flexibility of electric motors with the spine-tingling emotion of a naturally aspirated V16 engine.
        </p>
      </section>

      <div className="hero">
        <div className="hero-content">
          <h1>THIS IS FOR ETERNITY</h1>
          <button><a href="https://www.bugatti.com/en/models/tourbillon">DISCOVER THE BUGATTI TOURBILLON</a></button>
        </div>
      </div>
    </div>
  );
};

export default Buggati;
