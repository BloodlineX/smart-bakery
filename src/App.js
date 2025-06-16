import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

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
        <img src="/cake.jpg" alt="Delicious Cake" className="w-full h-[600px] object-cover opacity-80" />
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
            { src: "/bread1.jpg", title: "Breads", desc: "Crusty sourdough, soft rolls, and more." },
            { src: "/cake1.jpg", title: "Cakes", desc: "Chocolate, vanilla, fruit — all made fresh daily." },
            { src: "/pastry.jpg", title: "Pastries", desc: "Swirls, tarts, puffs and cookies with love." }
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

      {/* Order Form */}
      <section id="order" className="py-12 bg-pink-50">
        <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg" data-aos="fade-up">
          <h2 className="text-2xl font-heading mb-6 text-center">🍰 Place Your Order</h2>
          <form
            action="https://script.google.com/macros/s/AKfycbytXMG9yU3M2hFDQ1TI14vSNibmZ42854xLZbHih4BPP11HLdz_n9AbmY_e9XX1lQFE/exec"
            method="POST"
            className="space-y-4"
          >
            <input type="text" name="name" placeholder="Full Name" required className="w-full border p-2 rounded" />
            <input type="tel" name="phone" placeholder="Phone Number" required className="w-full border p-2 rounded" />
            <input type="text" name="item" placeholder="What would you like? (e.g., Chocolate Cake)" required className="w-full border p-2 rounded" />
            <input type="number" name="quantity" placeholder="Quantity" required className="w-full border p-2 rounded" />
            <textarea name="message" placeholder="Special Instructions" className="w-full border p-2 rounded" />
            <button type="submit" className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600">Submit Order</button>
          </form>
        </div>
      </section>

      {/* Owner Section */}
      <section id="owner" className="py-10 bg-yellow-100 text-center">
        <h2 className="text-3xl font-heading text-yellow-900 mb-4" data-aos="fade-up">Meet the Owner</h2>
        <div className="flex flex-col items-center" data-aos="zoom-in">
          <img src="/owner.jpg" alt="Bakery Owner" className="w-32 h-32 rounded-full object-cover mb-4" />
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