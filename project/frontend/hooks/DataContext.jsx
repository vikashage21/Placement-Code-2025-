// src/hooks/DataContext.jsx
import React, { createContext, useState, useEffect } from "react";

// Step 1: Create Context
export const DataContext = createContext(); // ✅ export the context itself

// Step 2: Create Provider Component
export function DataProvider({ children }) {
  const [videos, setVideos] = useState([]);

  // Step 3: Fetch videos from backend
  useEffect(() => {
    fetch("http://localhost:5000/api/videos")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched videos:", data);
        setVideos(data);
      })
      .catch((err) => console.error("Error fetching videos:", err));
  }, []);

  // Step 4: Provide the data to all children
  return (
    <DataContext.Provider value={{ videos, setVideos }}>
      {children}
    </DataContext.Provider>
  );
}
