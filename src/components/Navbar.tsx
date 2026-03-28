import { Link } from "react-router-dom";
import { ShoppingBag, Search, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useCart } from "../CartContext";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar({ onOpenCart }: { onOpenCart: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md py-3 shadow-sm" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 -ml-2 text-gray-900"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-tighter text-gray-900">
          VANTAGE
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link to="/shop" className="text-sm font-medium hover:text-gray-500 transition-colors">SHOP ALL</Link>
          <Link to="/shop?category=Tops" className="text-sm font-medium hover:text-gray-500 transition-colors">TOPS</Link>
          <Link to="/shop?category=Bottoms" className="text-sm font-medium hover:text-gray-500 transition-colors">BOTTOMS</Link>
          <Link to="/about" className="text-sm font-medium hover:text-gray-500 transition-colors">OUR STORY</Link>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-900 hover:text-gray-500 transition-colors hidden sm:block">
            <Search size={20} />
          </button>
          <button
            onClick={onOpenCart}
            className="p-2 text-gray-900 hover:text-gray-500 transition-colors relative"
          >
            <ShoppingBag size={20} />
            {totalItems > 0 && (
              <span className="absolute top-1 right-1 bg-black text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-[60]"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[80%] max-w-sm bg-white z-[70] p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-xl font-bold tracking-tighter">VANTAGE</span>
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  <X size={24} />
                </button>
              </div>
              <div className="flex flex-col space-y-6">
                <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium">Shop All</Link>
                <Link to="/shop?category=Tops" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium">Tops</Link>
                <Link to="/shop?category=Bottoms" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium">Bottoms</Link>
                <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium">Our Story</Link>
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium">Contact</Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
