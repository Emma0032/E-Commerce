import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./CartContext";
import Layout from "./Layout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="checkout" element={<Checkout />} />
          </Route>
        </Routes>
        <Analytics />
      </Router>
    </CartProvider>
  );
}
