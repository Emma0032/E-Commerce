import { Link } from "react-router-dom";
import { Product } from "../types";
import { motion } from "motion/react";
import { ShoppingBag } from "lucide-react";

export default function ProductCard({ product }: { product: Product }) {
  const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <Link to={`/product/${product.id}`} className="block overflow-hidden bg-gray-100 aspect-[3/4] relative">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col space-y-2">
          {product.isNew && (
            <span className="bg-white text-black text-[10px] font-bold uppercase tracking-widest px-3 py-1 shadow-sm">
              NEW
            </span>
          )}
          {product.isBestseller && (
            <span className="bg-black text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 shadow-sm">
              BESTSELLER
            </span>
          )}
          {discount > 0 && (
            <span className="bg-red-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 shadow-sm">
              -{discount}%
            </span>
          )}
        </div>

        {/* Quick Add Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white/80 backdrop-blur-sm">
          <button className="w-full bg-black text-white text-xs font-bold uppercase tracking-widest py-3 flex items-center justify-center space-x-2 hover:bg-gray-800 transition-colors">
            <ShoppingBag size={14} />
            <span>Quick View</span>
          </button>
        </div>
      </Link>

      <div className="mt-4 space-y-1">
        <div className="flex justify-between items-start">
          <Link to={`/product/${product.id}`} className="text-sm font-medium text-gray-900 hover:text-gray-500 transition-colors">
            {product.name}
          </Link>
          <div className="flex flex-col items-end">
            <span className="text-sm font-bold text-gray-900">${product.price}</span>
            {product.originalPrice && (
              <span className="text-xs text-gray-400 line-through">${product.originalPrice}</span>
            )}
          </div>
        </div>
        <p className="text-xs text-gray-500 uppercase tracking-widest">{product.category}</p>
      </div>
    </motion.div>
  );
}
