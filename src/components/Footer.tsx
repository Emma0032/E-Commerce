import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-tighter">VANTAGE</h3>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Crafting premium essentials for the modern minimalist. Quality that lasts, style that transcends.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-black transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-black transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-black transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Shop</h4>
            <ul className="space-y-4">
              <li><Link to="/shop" className="text-sm text-gray-500 hover:text-black transition-colors">All Products</Link></li>
              <li><Link to="/shop?category=Tops" className="text-sm text-gray-500 hover:text-black transition-colors">Tops</Link></li>
              <li><Link to="/shop?category=Bottoms" className="text-sm text-gray-500 hover:text-black transition-colors">Bottoms</Link></li>
              <li><Link to="/shop?category=Knitwear" className="text-sm text-gray-500 hover:text-black transition-colors">Knitwear</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Support</h4>
            <ul className="space-y-4">
              <li><Link to="/contact" className="text-sm text-gray-500 hover:text-black transition-colors">Contact Us</Link></li>
              <li><Link to="/shipping" className="text-sm text-gray-500 hover:text-black transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/faq" className="text-sm text-gray-500 hover:text-black transition-colors">FAQ</Link></li>
              <li><Link to="/size-guide" className="text-sm text-gray-500 hover:text-black transition-colors">Size Guide</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Join the Club</h4>
            <p className="text-sm text-gray-500 mb-4">Get 15% off your first order and early access to drops.</p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-gray-50 border border-gray-200 px-4 py-2 text-sm focus:outline-none focus:border-black transition-colors"
                required
              />
              <button className="bg-black text-white text-xs font-bold uppercase tracking-widest py-3 hover:bg-gray-800 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-[10px] text-gray-400 uppercase tracking-widest">
            © 2026 VANTAGE ESSENTIALS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-[10px] text-gray-400 uppercase tracking-widest hover:text-black">Privacy Policy</Link>
            <Link to="/terms" className="text-[10px] text-gray-400 uppercase tracking-widest hover:text-black">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
