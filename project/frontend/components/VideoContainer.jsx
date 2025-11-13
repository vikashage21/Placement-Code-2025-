import React, { useContext } from "react";
import { DataContext } from "../hooks/DataContext";
import "./VideoContainer.css";

function VideoContainer() {
  const { videos } = useContext(DataContext);

  if (!videos || videos.length === 0) {
    return (
      <div className="loading-container text-center py-5 text-light">
        <div className="spinner-border text-danger" role="status"></div>
        <p className="mt-3">Fetching awesome videos...</p>
      </div>
    );
  }

  return (
    <div className="video-page bg-black text-light min-vh-100 py-5">
      <div className="container">
        <h2 className="fw-bold mb-4">🎥 All Videos</h2>
        <div className="row g-4">
          {videos.map((video) => (
            <div
              key={video._id}
              className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center"
            >
              <div className="video-card shadow-lg rounded-3 overflow-hidden">
                <div className="video-wrapper">
                  <img
                    src={video.videoUrl.replace("mp4", "jpeg")}
                    style={{ height: "150px" }}
                    alt=""
                  />
                </div>

                <div className="card-body p-3">
                  <h5 className="fw-bold text-truncate">{video.title}</h5>
                  <p className="text-muted small mb-2">
                    {video.description || "No description available."}
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="badge bg-danger">
                      {video.uploadedBy || "Anonymous"}
                    </span>
                    <span className="text-secondary small">
                      {new Date(video.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VideoContainer;
