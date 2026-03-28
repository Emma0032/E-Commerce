import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Star, Quote } from "lucide-react";
import ProductCard from "../components/ProductCard";
import TrustBadges from "../components/TrustBadges";
import { PRODUCTS } from "../constants";

export default function Home() {
  const bestsellers = PRODUCTS.filter(p => p.isBestseller);

  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/vantage-hero/1920/1080?grayscale"
            alt="Hero"
            className="w-full h-full object-cover brightness-75"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-[0.9]"
          >
            The Art of <br /> Essentialism
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl font-medium tracking-tight text-gray-200 max-w-2xl mx-auto"
          >
            Premium basics crafted for longevity. No logos, no noise—just quality that speaks for itself.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Link
              to="/shop"
              className="bg-white text-black text-xs font-bold uppercase tracking-widest px-10 py-4 hover:bg-gray-100 transition-colors w-full sm:w-auto"
            >
              Shop New Arrivals
            </Link>
            <Link
              to="/about"
              className="text-white text-xs font-bold uppercase tracking-widest px-10 py-4 border border-white hover:bg-white hover:text-black transition-all w-full sm:w-auto"
            >
              Our Story
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TrustBadges />
      </div>

      {/* Featured Collections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter uppercase">The Bestsellers</h2>
            <p className="text-sm text-gray-500 max-w-md">Our most-loved pieces, refined over seasons for the perfect fit.</p>
          </div>
          <Link to="/shop" className="text-xs font-bold uppercase tracking-widest flex items-center space-x-2 hover:text-gray-500 transition-colors group">
            <span>View All Products</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Lifestyle Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 h-[80vh]">
        <div className="relative overflow-hidden group">
          <img
            src="https://picsum.photos/seed/vantage-lifestyle-1/1000/1200?grayscale"
            alt="Lifestyle"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/20 flex items-end p-12">
            <div className="text-white space-y-4">
              <h3 className="text-4xl font-bold tracking-tighter uppercase">The Knitwear Drop</h3>
              <Link to="/shop?category=Knitwear" className="text-xs font-bold uppercase tracking-widest border-b border-white pb-1 hover:opacity-70 transition-opacity">
                Explore Collection
              </Link>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden group">
          <img
            src="https://picsum.photos/seed/vantage-lifestyle-2/1000/1200?grayscale"
            alt="Lifestyle"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/20 flex items-end p-12">
            <div className="text-white space-y-4">
              <h3 className="text-4xl font-bold tracking-tighter uppercase">Tailored Essentials</h3>
              <Link to="/shop?category=Bottoms" className="text-xs font-bold uppercase tracking-widest border-b border-white pb-1 hover:opacity-70 transition-opacity">
                Explore Collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tighter uppercase">What They're Saying</h2>
            <div className="flex justify-center space-x-1">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-black text-black" />)}
            </div>
            <p className="text-sm text-gray-500">Over 50,000+ happy customers worldwide.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                text: "The quality is unlike anything I've found at this price point. Truly premium essentials.",
                author: "James W.",
                role: "Verified Buyer"
              },
              {
                text: "Finally, a brand that focuses on fit and fabric over loud logos. My entire wardrobe is Vantage now.",
                author: "Sarah L.",
                role: "Verified Buyer"
              },
              {
                text: "Fast shipping and the packaging felt like a luxury experience. 10/10 would recommend.",
                author: "Michael R.",
                role: "Verified Buyer"
              }
            ].map((review, i) => (
              <div key={i} className="space-y-6 text-center md:text-left">
                <Quote size={32} className="text-gray-200 mx-auto md:mx-0" />
                <p className="text-lg font-medium tracking-tight italic">"{review.text}"</p>
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest">{review.author}</p>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="max-w-3xl mx-auto px-4 text-center space-y-8 py-12">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold tracking-tighter uppercase">Join the Inner Circle</h2>
          <p className="text-sm text-gray-500">Sign up for early access to limited drops and exclusive offers. We promise no spam, just quality.</p>
        </div>
        <form className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow bg-white border border-gray-200 px-6 py-4 text-sm focus:outline-none focus:border-black transition-colors"
            required
          />
          <button className="bg-black text-white text-xs font-bold uppercase tracking-widest px-12 py-4 hover:bg-gray-800 transition-colors">
            Subscribe
          </button>
        </form>
        <p className="text-[10px] text-gray-400 uppercase tracking-widest">
          By subscribing, you agree to our Privacy Policy and Terms of Service.
        </p>
      </section>
    </div>
  );
}
