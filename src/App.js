import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    item: "",
    quantity: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzzxjHPOs0cX9U_Co0cCazT8LkDyTg5Zx-7v9K55LTCrE9AIxQEf8tRMe71YVfF9JxQpw/exec",
        {
          method: "POST",
          body: new URLSearchParams(formData),
        }
      );

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", phone: "", item: "", quantity: "", message: "" });
      } else {
        alert("Something went wrong. Try again.");
      }
    } catch (error) {
      alert("Failed to submit. Please check your internet.");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="font-sans">
      <header className="bg-yellow-100 shadow">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-heading text-yellow-900 drop-shadow-md">The Golden Ratio Bakery</h1>
          <ul className="flex gap-6 text-yellow-800 font-semibold font-body">
            <li><a href="#menu">Menu</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#order">Order</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative text-center py-10 bg-pink-100">
        <img src={`${process.env.PUBLIC_URL}/cake.jpg`} alt="Delicious Cake" className="w-full h-[600px] object-cover opacity-80" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 text-white">
          <h2 className="text-4xl font-heading drop-shadow-lg text-yellow-200 animate-pulse">
            Freshly Baked. Purely Delicious.
          </h2>
          <p className="font-body text-white mt-2">Warm up your day with our handmade delights.</p>
          <a href="#menu" className="mt-6 inline-block px-6 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition">See Our Menu</a>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-12 bg-white text-center">
        <h2 className="text-3xl font-heading mb-8 text-yellow-800" data-aos="fade-up">Our Menu</h2>
        <div className="grid md:grid-cols-3 gap-6 px-8">
          {[
            { src: `${process.env.PUBLIC_URL}/bread.jpg`, title: "Breads", desc: "Crusty sourdough, soft rolls, and more." },
            { src: `${process.env.PUBLIC_URL}/cake1.jpg`, title: "Cakes", desc: "Chocolate, vanilla, fruit — all made fresh daily." },
            { src: `${process.env.PUBLIC_URL}/pastry1.jpg`, title: "Pastries", desc: "Swirls, tarts, puffs and cookies with love." }
          ].map((item, i) => (
            <div key={i} className="bg-yellow-50 shadow-md rounded-lg p-4" data-aos="zoom-in">
              <img src={item.src} alt={item.title} className="w-full h-85 object-cover rounded" />
              <h3 className="mt-4 text-xl font-heading">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600 font-body">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-10 bg-yellow-100 text-center">
        <h2 className="text-3xl font-heading text-yellow-900 mb-4" data-aos="fade-right">About Us</h2>
        <p className="max-w-2xl mx-auto text-gray-700 px-4 font-body" data-aos="fade-left">
          Founded with a passion for real ingredients and slow baking, The Golden Ratio has been serving love since 2023.
          We believe in butter, not shortcuts 🧈
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-10 bg-white text-center">
        <h2 className="text-3xl font-heading text-yellow-900 mb-4" data-aos="fade-up">Contact</h2>
        <p className="font-body">Email: hello@thegoldenratio.com | Phone: +91 98765 3210</p>
      </section>

      {/* Order Section with Smooth Form */}
      <section id="order" className="py-12 bg-pink-50">
        <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg" data-aos="fade-up">
          <h2 className="text-2xl font-heading mb-6 text-center">🍰 Place Your Order</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {submitted && (
              <div className="text-green-600 font-semibold bg-green-100 border border-green-300 p-3 rounded">
                🎉 Order submitted successfully!
              </div>
            )}
            <input type="text" name="name" placeholder="Full Name" required value={formData.name} onChange={handleChange} className="w-full border p-2 rounded" />
            <input type="tel" name="phone" placeholder="Phone Number" required value={formData.phone} onChange={handleChange} className="w-full border p-2 rounded" />
            <input type="text" name="item" placeholder="What would you like? (e.g., Chocolate Cake)" required value={formData.item} onChange={handleChange} className="w-full border p-2 rounded" />
            <input type="number" name="quantity" placeholder="Quantity" required value={formData.quantity} onChange={handleChange} className="w-full border p-2 rounded" />
            <textarea name="message" placeholder="Special Instructions" value={formData.message} onChange={handleChange} className="w-full border p-2 rounded" />
            <button type="submit" disabled={isSubmitting} className={`w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}>
              {isSubmitting ? "Submitting..." : "Submit Order"}
            </button>
          </form>
        </div>
      </section>

      {/* Owner Section */}
      <section id="owner" className="py-10 bg-yellow-100 text-center">
        <h2 className="text-3xl font-heading text-yellow-900 mb-4" data-aos="fade-up">Meet the Owner</h2>
        <div className="flex flex-col items-center" data-aos="zoom-in">
          <img src={`${process.env.PUBLIC_URL}/owner.jpg`} alt="Bakery Owner" className="w-32 h-32 rounded-full object-cover mb-4" />
          <h3 className="text-xl font-heading">Bhaskar Chauhan</h3>
          <p className="font-body">Founder of The Golden Ratio Bakery</p>
        </div>
      </section>

      <footer className="bg-yellow-900 text-white py-4 text-center">
        <p className="font-body">© 2025 The Golden Ratio Bakery</p>
      </footer>
    </div>
  );
}

export default App;