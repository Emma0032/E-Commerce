import { useState, useEffect } from "react";
import { X, Mail } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeen = localStorage.getItem("vantage-newsletter-seen");
    if (!hasSeen) {
      const timer = setTimeout(() => setIsOpen(true), 5000); // Show after 5 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("vantage-newsletter-seen", "true");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 z-[200] backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-white z-[210] shadow-2xl flex flex-col md:flex-row overflow-hidden"
          >
            <div className="md:w-1/2 bg-gray-100 relative hidden md:block">
              <img
                src="https://picsum.photos/seed/vantage-popup/600/800?grayscale"
                alt="Newsletter"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="md:w-1/2 p-8 sm:p-12 flex flex-col justify-center space-y-6 relative">
              <button onClick={handleClose} className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X size={20} />
              </button>
              
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter uppercase leading-tight">Join the Club</h2>
                <p className="text-sm text-gray-500">Get 15% off your first order and exclusive access to new drops.</p>
              </div>

              <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); handleClose(); }}>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-gray-50 border border-gray-200 pl-12 pr-4 py-4 text-sm focus:outline-none focus:border-black transition-colors"
                    required
                  />
                </div>
                <button className="w-full bg-black text-white text-xs font-bold uppercase tracking-widest py-4 hover:bg-gray-800 transition-colors">
                  Unlock My 15% Off
                </button>
              </form>

              <p className="text-[10px] text-gray-400 uppercase tracking-widest text-center">
                No spam. Just quality. Unsubscribe anytime.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
