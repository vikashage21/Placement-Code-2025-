import React, { useState } from "react";
import UploadEpisode from "./UploadEpisode";
import UploadSeries from "./UploadSeries";
import UploadVideo from "./UploadVideo";
import '../uploadContainer.css'

function UploadContainer() {
  const [selectedOption, setSelectedOption] = useState(""); // series | episode | video

  return (
    <div className="container py-5 text-white">
      <h2 className="text-center mb-4 fw-bold">🎬 Upload Dashboard</h2>

      {/* --- Selection Buttons --- */}
      <div className="d-flex justify-content-center flex-wrap gap-3 mb-5">
        <button
          className={`btn ${
            selectedOption === "series" ? "btn-danger" : "btn-outline-danger"
          } px-4 fw-semibold`}
          onClick={() => setSelectedOption("series")}
        >
          Upload Series
        </button>

        <button
          className={`btn ${
            selectedOption === "episode" ? "btn-danger" : "btn-outline-danger"
          } px-4 fw-semibold`}
          onClick={() => setSelectedOption("episode")}
        >
          Upload Episode
        </button>

        <button
          className={`btn ${
            selectedOption === "video" ? "btn-danger" : "btn-outline-danger"
          } px-4 fw-semibold`}
          onClick={() => setSelectedOption("video")}
        >
          Upload Single Video
        </button>
      </div>

      {/* --- Conditional Rendering --- */}
      <div className="p-4 bg-dark rounded-4 shadow-lg">
        {selectedOption === "series" && <UploadSeries />}
        {selectedOption === "episode" && <UploadEpisode />}
        {selectedOption === "video" && <UploadVideo />}

        {!selectedOption && (
          <div className="text-center text-muted py-5">
            <h5>Select an upload type above 👆</h5>
            <p className="mt-2">You can upload Series, Episode, or a single Video.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default UploadContainer;
