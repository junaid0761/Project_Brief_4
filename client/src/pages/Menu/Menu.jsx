import { useState } from "react";

function Menu() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const menuItems = [
    {
      id: 1,
      name: "Margherita Pizza",
      description: "Fresh tomato, mozzarella and basil.",
      price: 249,
      image: "🍕",
    },
    {
      id: 2,
      name: "Classic Burger",
      description: "Juicy burger with fresh vegetables.",
      price: 199,
      image: "🍔",
    },
    {
      id: 3,
      name: "Veg Noodles",
      description: "Hot and delicious vegetable noodles.",
      price: 179,
      image: "🍜",
    },
    {
      id: 4,
      name: "Chocolate Cake",
      description: "Soft and creamy chocolate cake.",
      price: 149,
      image: "🍰",
    },
  ];

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    let updatedCart;

    if (existingItem) {
      updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    } else {
      updatedCart = [...cart, { ...item, quantity: 1 }];
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="menu-page">
      <section className="menu-header">
        <h1>Our Menu</h1>
        <p>Choose your favourite food and enjoy a delicious meal.</p>
      </section>

      <section className="menu-grid">
        {menuItems.map((item) => {
          const cartItem = cart.find(
            (cartItem) => cartItem.id === item.id
          );

          return (
            <div className="menu-card" key={item.id}>
              <div className="menu-image">{item.image}</div>

              <h3>{item.name}</h3>

              <p>{item.description}</p>

              <strong>₹{item.price}</strong>

              <button onClick={() => addToCart(item)}>
                {cartItem
                  ? `Added ✓ (${cartItem.quantity})`
                  : "Add to Cart"}
              </button>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Menu;