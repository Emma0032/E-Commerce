import { useParams, Link } from "react-router-dom";
import { PRODUCTS } from "../constants";
import { useState, useEffect } from "react";
import { useCart } from "../CartContext";
import { Star, Truck, RotateCcw, ShieldCheck, ChevronRight, ChevronLeft, Plus, Minus, ShoppingBag, Heart } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import ProductCard from "../components/ProductCard";

export default function ProductDetail() {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === id);
  const { addToCart } = useCart();

  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [currentImage, setCurrentImage] = useState(0);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes[0]);
      setSelectedColor(product.colors[0].name);
      setCurrentImage(0);
    }
  }, [product]);

  if (!product) return <div className="py-24 text-center">Product not found</div>;

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const relatedProducts = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
      {/* Breadcrumbs */}
      <nav className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">
        <Link to="/" className="hover:text-black transition-colors">Home</Link>
        <ChevronRight size={12} />
        <Link to="/shop" className="hover:text-black transition-colors">Shop</Link>
        <ChevronRight size={12} />
        <Link to={`/shop?category=${product.category}`} className="hover:text-black transition-colors">{product.category}</Link>
        <ChevronRight size={12} />
        <span className="text-black">{product.name}</span>
      </nav>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Image Gallery */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden group">
            <img
              src={product.images[currentImage]}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <button
              onClick={() => setCurrentImage((prev) => (prev === 0 ? product.images.length - 1 : prev - 1))}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => setCurrentImage((prev) => (prev === product.images.length - 1 ? 0 : prev + 1))}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setCurrentImage(i)}
                className={`aspect-[3/4] bg-gray-100 overflow-hidden border-2 transition-all ${
                  currentImage === i ? "border-black" : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img src={img} alt={`${product.name} ${i}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex space-x-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className={i < Math.floor(product.rating) ? "fill-black text-black" : "text-gray-200"} />
                ))}
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                {product.reviewsCount} Reviews
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tighter uppercase leading-tight">{product.name}</h1>
            <div className="flex items-center space-x-4">
              <span className="text-2xl font-bold">${product.price}</span>
              {product.originalPrice && (
                <span className="text-lg text-gray-400 line-through">${product.originalPrice}</span>
              )}
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">{product.description}</p>
          </div>

          {/* Color Selector */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest">Color: {selectedColor}</h4>
            <div className="flex space-x-3">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  className={`w-8 h-8 rounded-full border-2 transition-all ${
                    selectedColor === color.name ? "border-black scale-110" : "border-transparent hover:scale-105"
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          {/* Size Selector */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h4 className="text-[10px] font-bold uppercase tracking-widest">Size: {selectedSize}</h4>
              <button className="text-[10px] font-bold uppercase tracking-widest text-gray-400 border-b border-gray-400 hover:text-black hover:border-black transition-all">
                Size Guide
              </button>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-3 text-[10px] font-bold uppercase tracking-widest border transition-all ${
                    selectedSize === size
                      ? "bg-black text-white border-black"
                      : "bg-white text-gray-500 border-gray-200 hover:border-black hover:text-black"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Urgency */}
          {product.stock < 10 && (
            <div className="bg-red-50 text-red-600 text-[10px] font-bold uppercase tracking-widest py-2 px-4 flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse" />
              <span>Only {product.stock} left in stock - order soon</span>
            </div>
          )}

          {/* Actions */}
          <div className="flex space-x-4">
            <button
              onClick={handleAddToCart}
              className={`flex-grow text-xs font-bold uppercase tracking-widest py-5 flex items-center justify-center space-x-2 transition-all ${
                isAdded ? "bg-green-600 text-white" : "bg-black text-white hover:bg-gray-800"
              }`}
            >
              <ShoppingBag size={16} />
              <span>{isAdded ? "Added to Bag" : "Add to Bag"}</span>
            </button>
            <button className="p-5 border border-gray-200 hover:border-black transition-colors">
              <Heart size={20} />
            </button>
          </div>

          {/* Trust Signals */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-gray-100">
            <div className="flex items-center space-x-3">
              <Truck size={18} className="text-gray-400" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Free Shipping</span>
            </div>
            <div className="flex items-center space-x-3">
              <RotateCcw size={18} className="text-gray-400" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">30-Day Returns</span>
            </div>
            <div className="flex items-center space-x-3">
              <ShieldCheck size={18} className="text-gray-400" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Secure Checkout</span>
            </div>
          </div>

          {/* Accordions */}
          <div className="space-y-4 pt-8">
            {[
              { title: "Details & Fit", content: "Our Essential Heavyweight Tee is designed with a relaxed, boxy fit. We recommend taking your normal size for the intended look, or sizing down for a slimmer fit. 100% Organic Cotton." },
              { title: "Shipping & Returns", content: "Free standard shipping on all orders over $150. Returns accepted within 30 days of delivery for a full refund or exchange." },
              { title: "Care Instructions", content: "Machine wash cold with like colors. Tumble dry low. Do not bleach. Iron on low heat if needed." }
            ].map((item, i) => (
              <details key={i} className="group border-b border-gray-100 pb-4">
                <summary className="list-none flex justify-between items-center cursor-pointer">
                  <span className="text-[10px] font-bold uppercase tracking-widest">{item.title}</span>
                  <Plus size={14} className="group-open:hidden" />
                  <Minus size={14} className="hidden group-open:block" />
                </summary>
                <p className="text-sm text-gray-500 mt-4 leading-relaxed">{item.content}</p>
              </details>
            ))}
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="space-y-12">
        <h2 className="text-2xl font-bold tracking-tighter uppercase text-center">Complete the Look</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {relatedProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
