import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import NewsletterPopup from "./components/NewsletterPopup";
import { useState } from "react";

export default function Layout() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-white">
      {/* Announcement Bar */}
      <div className="bg-black text-white text-[10px] uppercase tracking-[0.2em] py-2 text-center font-bold">
        Free shipping on all orders over $150
      </div>

      <Navbar onOpenCart={() => setIsCartOpen(true)} />
      
      <main className="flex-grow pt-16">
        <Outlet />
      </main>

      <Footer />

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <NewsletterPopup />
    </div>
  );
}
