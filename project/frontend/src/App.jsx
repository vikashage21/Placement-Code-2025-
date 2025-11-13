import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../components/Home";
import VideoContainer from "../components/VideoContainer";
import UploadContainer from "../components/UploadContainer";
import Player from "../components/Player";
import SeriesPlayer from "../components/SeriesPlayer";

import "./App.css";
import EpisodePlayer from "../components/EpisodePlayer";

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  // ✅ Track connection state
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // cleanup
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // ✅ Offline Lottie Screen
  if (!isOnline) {
    return (
      <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-black text-white">
        <DotLottieReact
          src="https://lottie.host/5bfc4c06-bc64-47b0-bffb-4e9c88b73e62/5mb8PBA6U7.lottie"
          loop
          autoplay
          style={{ width: "300px", height: "300px" }}
        />
        <h4 className="mt-3 fw-semibold">You’re Offline 😕</h4>
        <p className="text-secondary">Please check your internet connection.</p>
      </div>
    );
  }

  // ✅ Main App Routes
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100 bg-black">
        <Navbar />

        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/videos" element={<VideoContainer />} />
            <Route path="/upload" element={<UploadContainer />} />
            <Route path="/movedetails/:id" element={<Player />} />
            <Route path="/movedetails/series/:id" element={<SeriesPlayer />} />
            <Route
              path="/movedetails/episode/:epId"
              element={<EpisodePlayer />}
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
