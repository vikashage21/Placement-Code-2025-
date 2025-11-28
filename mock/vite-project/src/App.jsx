import React from "react";
import NavbarComponents from "./components/NavabarComponets";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./components/About";
import TodoComponetes from "./components/TodoComponets";
import Footer from "./components/Footer";
const App = () => {
  return (
    // creating a browserRouter to navigate 

    <>
      <BrowserRouter>
        <NavbarComponents />
        <Routes>
          
          <Route path="/about" element={<About />} />
          <Route path="/todo" element={<TodoComponetes />} />
        </Routes>
        {/* <Footer /> */}

        
      </BrowserRouter>

    </>
  );
};

export default App;
