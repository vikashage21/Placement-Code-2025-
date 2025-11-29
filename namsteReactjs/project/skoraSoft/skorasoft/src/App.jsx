import React from "react";
import { createBrowserRouter, RouterProvider, Outlet, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Career from "./components/Career";
import TargetCursor from "./components/TargetCursor";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";

// Layout with Navbar (for user pages)
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

// Layout WITHOUT Navbar (for admin pages)
const AdminLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

const App = () => {
  const router = createBrowserRouter([
    {
      element: <MainLayout />,     // Navbar will show here
      children: [
        { path: "/", element: <Home /> },
        { path: "/contact", element: <Contact /> },
        { path: "/career", element: <Career /> },
      ],
    },

    {
      element: <AdminLayout />,   // No navbar here
      children: [
        { path: "/admin", element: <AdminLogin /> },
        { path: "/admin/dashboard", element: <AdminDashboard /> },
      ],
    },
  ]);

  return (
    <>
      <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
      />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
