import React from "react";
import GlobalStyles from "./styles/global";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import { CartProvider } from "react-use-cart";



function App() {

  return (
    <CartProvider>        
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
      <GlobalStyles />
    </CartProvider>
  );
}

export default App;
