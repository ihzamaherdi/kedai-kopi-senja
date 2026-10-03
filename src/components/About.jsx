import React from 'react';

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="section-heading">
        <p className="eyebrow">TENTANG KAMI</p>
        <h2>Cerita di Balik Secangkir Kopi</h2>
      </div>

      <div className="about-content">
        <div className="about-text">
          <p>
            Kedai Kopi Senja hadir untuk menciptakan tempat sederhana
            yang nyaman untuk menikmati kopi dan melepas penat.
          </p>

          <p>
            Kami menyajikan kopi dan minuman favorit dengan bahan
            pilihan, suasana hangat, serta harga yang bersahabat.
          </p>
        </div>

        <div className="features">
          <div className="feature">
            <span>01</span>
            <div>
              <h3>Kopi Pilihan</h3>
              <p>Biji kopi pilihan dengan rasa yang nikmat.</p>
            </div>
          </div>

          <div className="feature">
            <span>02</span>
            <div>
              <h3>Suasana Nyaman</h3>
              <p>Tempat santai untuk bekerja, belajar, atau berbincang.</p>
            </div>
          </div>

          <div className="feature">
            <span>03</span>
            <div>
              <h3>Harga Bersahabat</h3>
              <p>Nikmati menu favorit tanpa perlu mengeluarkan banyak biaya.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
