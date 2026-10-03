import React from 'react';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="eyebrow">KEDAI KOPI SENJA</p>

        <h1>
          Temukan rasa yang nyaman
          <span> di setiap tegukan.</span>
        </h1>

        <p className="hero-description">
          Tempat sederhana untuk menikmati kopi, berbincang,
          dan menghabiskan waktu bersama orang-orang terdekat.
        </p>

        <div className="hero-buttons">
          <a href="#menu" className="primary-button">
            Lihat Menu
          </a>

          <a href="#about" className="secondary-button">
            Tentang Kami
          </a>
        </div>
      </div>

      <div className="hero-image">
        <div className="coffee-visual">
          <div className="coffee-cup-icon">☕</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
