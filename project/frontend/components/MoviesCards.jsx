import React from "react";
import "../MoviesCards.css";
import { Link } from "react-router-dom";
import ProductDesc from "./ProductDesc";

function MoviesCards({ video = [], play }) {
  console.log("Video Data:", video);

  // Handle empty state
  if (!video || video.length === 0) {
    return <p className="text-center text-light py-4">No videos available...</p>;
  }

  return (
    <div className="movies-container container-fluid py-5 bg-black">
      {!play && <h2 className="section-title mb-4 fw-bold">Trending Now</h2>}
      <div className="row g-4">
        {video.map((items) => (
          <div
            key={items._id}
            className={play ? "w-100" : "col-md-3 col-sm-6 col-lg-2"}
          >
            <Link
              to={
                items.seriesId
                  ? `/movedetails/series/${items.seriesId}`
                  : `/movedetails/${items._id}`
              }
              className="text-decoration-none"
            >
              <div
                className={
                  play
                    ? "video-player-container"
                    : "movie-card position-relative overflow-hidden rounded-3 shadow-sm"
                }
              >
                {play ? (
                  <>
                    <video
                      src={items.videoUrl || items?.episodes?.[0]?.videoUrl}
                      className="movie-video"
                      controls
                      autoPlay
                    />
                    <ProductDesc items={items} />
                  </>
                ) : (
                  <>
                    <img
                      src={items.videoUrl?.replace(".mp4", ".jpeg")}
                      className="movie-thumbnail"
                      alt={items.title}
                    />
                    {items.episodeNumber && (
                      <p className="episode-tag">Ep - {items.episodeNumber}</p>
                    )}
                    <div className="overlay">
                      <div className="overlay-content">
                        <h5 className="fw-bold mb-2 text-truncate">
                          {items.title || "Untitled"}
                        </h5>
                        <p className="small mb-3">
                          {items.description || "No description available."}
                        </p>
                        <button className="btn btn-danger btn-sm me-2">
                          <i className="fa-solid fa-play"></i> Play
                        </button>
                        <button className="btn btn-outline-light btn-sm">
                          <i className="fa-solid fa-info-circle"></i> Info
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoviesCards;
