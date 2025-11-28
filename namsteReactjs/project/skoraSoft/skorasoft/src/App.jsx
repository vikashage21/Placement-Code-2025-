import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Contact from './pages/Contact'
import Career from "./components/Career";
import TargetCursor from "./components/TargetCursor";
const App = () => {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },

    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/career",
      element: <Career />,
    },
  ]);
  return (
    <div>
        <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
      />
      <RouterProvider router={routers} />
    </div>
  );
};

export default App;
