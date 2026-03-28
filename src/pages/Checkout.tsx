import { useState } from "react";
import { useCart } from "../CartContext";
import { Link } from "react-router-dom";
import { ShieldCheck, Lock, Truck, ChevronRight, ArrowLeft } from "lucide-react";

export default function Checkout() {
  const { cart, totalPrice } = useCart();
  const [step, setStep] = useState(1);

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center space-y-6">
        <h1 className="text-3xl font-bold tracking-tighter uppercase">Your bag is empty</h1>
        <p className="text-gray-500">Add some items to your bag to proceed with checkout.</p>
        <Link to="/shop" className="inline-block bg-black text-white text-xs font-bold uppercase tracking-widest px-10 py-4 hover:bg-gray-800 transition-colors">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Checkout Form */}
        <div className="lg:col-span-7 space-y-12">
          {/* Progress */}
          <div className="flex items-center space-x-4 text-[10px] font-bold uppercase tracking-widest">
            <span className={step >= 1 ? "text-black" : "text-gray-300"}>Shipping</span>
            <ChevronRight size={12} className="text-gray-300" />
            <span className={step >= 2 ? "text-black" : "text-gray-300"}>Payment</span>
            <ChevronRight size={12} className="text-gray-300" />
            <span className={step >= 3 ? "text-black" : "text-gray-300"}>Review</span>
          </div>

          <div className="space-y-8">
            <h2 className="text-2xl font-bold tracking-tighter uppercase">Shipping Information</h2>
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">First Name</label>
                <input type="text" className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-black" required />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Last Name</label>
                <input type="text" className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-black" required />
              </div>
              <div className="sm:col-span-2 space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Email Address</label>
                <input type="email" className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-black" required />
              </div>
              <div className="sm:col-span-2 space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Address</label>
                <input type="text" className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-black" required />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">City</label>
                <input type="text" className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-black" required />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Postal Code</label>
                <input type="text" className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-black" required />
              </div>
            </form>
          </div>

          <div className="pt-8 border-t border-gray-100 flex items-center justify-between">
            <Link to="/shop" className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:text-black">
              <ArrowLeft size={14} />
              <span>Back to Shop</span>
            </Link>
            <button className="bg-black text-white text-xs font-bold uppercase tracking-widest px-12 py-4 hover:bg-gray-800 transition-colors">
              Continue to Payment
            </button>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-5">
          <div className="bg-gray-50 p-8 space-y-8 sticky top-24">
            <h2 className="text-xl font-bold tracking-tighter uppercase">Order Summary</h2>
            
            <div className="space-y-6">
              {cart.map((item) => (
                <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex space-x-4">
                  <div className="w-16 h-20 bg-gray-200 shrink-0">
                    <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-tight">{item.name}</h4>
                      <p className="text-[10px] text-gray-400 uppercase tracking-widest">
                        {item.selectedSize} / {item.selectedColor} x {item.quantity}
                      </p>
                    </div>
                    <span className="text-xs font-bold">${item.price * item.quantity}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4 pt-6 border-t border-gray-200">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500 uppercase tracking-widest text-[10px] font-bold">Subtotal</span>
                <span className="font-bold">${totalPrice}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500 uppercase tracking-widest text-[10px] font-bold">Shipping</span>
                <span className="text-green-600 font-bold uppercase text-[10px]">Free</span>
              </div>
              <div className="flex justify-between text-lg pt-4 border-t border-gray-200">
                <span className="font-bold uppercase tracking-tighter">Total</span>
                <span className="font-bold">${totalPrice}</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-400">
                <Lock size={16} />
                <span className="text-[10px] font-bold uppercase tracking-widest">Secure SSL Encryption</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Truck size={16} />
                <span className="text-[10px] font-bold uppercase tracking-widest">Fast Tracked Delivery</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <ShieldCheck size={16} />
                <span className="text-[10px] font-bold uppercase tracking-widest">30-Day Money Back Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
