import React, { useState, useEffect } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    item: "",
    quantity: "",
    message: "",
  });

  const categorizedMenu = {
    Cake: [
      { name: "Chocolate Cake", image: "/chocolate-cake.jpg" },
      { name: "Red Velvet Cake", image: "/red-velvet.jpg" },
      { name: "Vanilla Cake", image: "/vanilla-cake.jpg" },
    ],
    Pastry: [
      { name: "Black Forest Pastry", image: "/black-forest.jpg" },
      { name: "Strawberry Pastry", image: "/strawberry.jpg" },
      { name: "Pineapple Pastry", image: "/pineapple.jpg" },
    ],
    Bread: [
      { name: "Garlic Bread", image: "/garlic.jpg" },
      { name: "Multigrain Bread", image: "/multigrain.jpg" },
      { name: "Focaccia Bread", image: "/focaccia.jpg" },
    ],
    Cookie: [
      { name: "Choco Chip Cookie", image: "/cookie-choco.jpg" },
      { name: "Butter Cookie", image: "/cookie-butter.jpg" },
      { name: "Oatmeal Cookie", image: "/cookie-oat.jpg" },
    ],
    Muffins: [
      { name: "Blueberry Muffin", image: "/muffin-blueberry.jpg" },
      { name: "Banana Muffin", image: "/muffin-banana.jpg" },
      { name: "Chocolate Muffin", image: "/muffin-choco.jpg" },
    ],
    Cupcake: [
      { name: "Vanilla Cupcake", image: "/cupcake-vanilla.jpg" },
      { name: "Red Velvet Cupcake", image: "/cupcake-red.jpg" },
      { name: "Coffee Cupcake", image: "/cupcake-coffee.jpg" },
    ],
  };

  const addToCart = (itemName, quantity = 1) => {
    const newItem = { item: itemName, quantity };
    setCart([newItem]);
  };

  useEffect(() => {
    if (cart.length > 0) {
      setFormData((prev) => ({
        ...prev,
        item: cart[0].item,
        quantity: cart[0].quantity,
      }));
    }
  }, [cart]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order Submitted:\n" + JSON.stringify(formData, null, 2));
    // 🔒 Add Google Sheets/Firebase integration here if needed
  };

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-rose-600">
        🍰 The Golden Ratio Bakery
      </h1>

      {/* MENU */}
      {Object.entries(categorizedMenu).map(([category, items], i) => (
        <div key={i} className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-rose-700">{category}s</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl shadow hover:shadow-lg text-center"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-lg mb-3"
                />
                <h3 className="text-lg font-medium">{item.name}</h3>
                <button
                  onClick={() => addToCart(item.name)}
                  className="mt-3 px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* ORDER FORM */}
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center text-green-700">
          🧾 Order Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full border p-2 rounded"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="w-full border p-2 rounded"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="item"
            placeholder="Item"
            className="w-full border p-2 rounded bg-gray-100"
            value={formData.item}
            readOnly
          />
          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            className="w-full border p-2 rounded"
            value={formData.quantity}
            onChange={handleInputChange}
            required
            min="1"
          />
          <textarea
            name="message"
            placeholder="Any special message?"
            className="w-full border p-2 rounded"
            value={formData.message}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Submit Order
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;