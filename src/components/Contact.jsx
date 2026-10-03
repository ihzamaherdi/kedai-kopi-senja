const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <div className="section-heading">
        <p className="eyebrow">KUNJUNGI KAMI</p>
        <h2>Temui Kami di Kedai</h2>
      </div>

      <div className="contact-grid">
        <div className="contact-card">
          <span>📍</span>
          <h3>Kedai Kopi Senja</h3>
          <p>Jl. Senja No. 10, Depok</p>
        </div>

        <div className="contact-card">
          <span>🕐</span>
          <h3>Jam Operasional</h3>
          <p>Senin – Minggu, 09.00 – 22.00</p>
        </div>

        <div className="contact-card">
          <span>📱</span>
          <h3>Telepon</h3>
          <p>0812-3456-7890</p>
        </div>
      </div>

      <a
        href="https://wa.me/6281234567890"
        className="primary-button whatsapp-button"
        target="_blank"
        rel="noreferrer"
      >
        Hubungi via WhatsApp
      </a>
    </section>
  );
};

export default Contact;
