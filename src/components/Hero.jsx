import heroImage from '../assets/hero.png';

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
        <img src={heroImage} alt="Kopi Kedai Senja" className="hero-photo" />
      </div>
    </section>
  );
};

export default Hero;