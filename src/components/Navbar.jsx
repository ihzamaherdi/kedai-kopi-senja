import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#home" className="logo">
        Kopi Senja
      </a>

      <nav>
        <a href="#home">Beranda</a>
        <a href="#about">Tentang</a>
        <a href="#menu">Menu</a>
        <a href="#contact">Kontak</a>
      </nav>

      <a href="#contact" className="nav-button">
        Pesan Sekarang
      </a>
    </header>
  );
};

export default Navbar;
