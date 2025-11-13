import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css"; // ✅ Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // ✅ Bootstrap JS
import "./index.css";
import { DataProvider } from "../hooks/DataContext.jsx";
// Import all of Bootstrap's JS

createRoot(document.getElementById("root")).render(
  <StrictMode>

    <DataProvider>
      <App />

    </DataProvider>
   
   
  </StrictMode>
);
