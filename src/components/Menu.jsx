const menuItems = [
  {
    category: "KOPI",
    items: [
      { name: "Es Kopi Senja", price: "Rp18.000" },
      { name: "Americano", price: "Rp15.000" },
      { name: "Cafe Latte", price: "Rp20.000" },
      { name: "Cappuccino", price: "Rp20.000" },
    ],
  },
  {
    category: "NON-KOPI",
    items: [
      { name: "Matcha Latte", price: "Rp20.000" },
      { name: "Chocolate", price: "Rp18.000" },
      { name: "Lemon Tea", price: "Rp12.000" },
    ],
  },
  {
    category: "SNACK",
    items: [
      { name: "Croissant", price: "Rp15.000" },
      { name: "French Fries", price: "Rp15.000" },
      { name: "Pisang Cokelat", price: "Rp13.000" },
    ],
  },
];

const Menu = () => {
  return (
    <section className="menu section" id="menu">
      <div className="section-heading center">
        <p className="eyebrow">MENU KAMI</p>
        <h2>Temukan Favoritmu</h2>
        <p>
          Pilihan minuman dan makanan sederhana untuk menemani harimu.
        </p>
      </div>

      <div className="menu-grid">
        {menuItems.map((category) => (
          <div className="menu-category" key={category.category}>
            <h3>{category.category}</h3>

            {category.items.map((item) => (
              <div className="menu-item" key={item.name}>
                <span>{item.name}</span>
                <strong>{item.price}</strong>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
