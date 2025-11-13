import React from "react";
// importing browserRouter from react router

import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import {Products} from "../components/Products";
import ProductDetails from "../components/ProductDetails";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />


        </Routes>

        {/* Your routes and components will go here */}
      </BrowserRouter>
    </div>
  );
}

export default App;
