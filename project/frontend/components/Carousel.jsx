import React from "react";
import "../Carousel.css";
import { Link, useParams } from "react-router-dom";
function Carousel({ imgData }) {
  if (!imgData || !imgData.videos || imgData.videos.length === 0) {
    return <p className="text-center text-light py-5">Loading...</p>;
  }

  return (
    <div
      id="carouselExampleInterval"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {imgData.videos.map((video, index) => {
          const thumbnail = video.videoUrl.replace(".mp4", ".jpeg");

          return (
            <div
              key={video._id}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              data-bs-interval="5000"
            >
              {/* Background image */}
              <img
                src={thumbnail}
                className="d-block w-100 netflix-banner-img"
                alt={video.title}
              />

              {/* Dark gradient overlay */}
              <div className="netflix-overlay"></div>

              {/* Banner content */}
              <div className="netflix-banner-content container">
                <h1 className="banner-title">{video.title}</h1>
                <p className="banner-desc">{video.description}</p>

                <div className="banner-buttons">
                  <Link to={`/movedetails/${video._id}`}>
                    <button className="btn btn-light me-2">
                      <i className="fa-solid fa-play"></i> Play
                    </button>
                    <button className="btn btn-secondary">
                      <i className="fa-solid fa-circle-info"></i> More Info
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Carousel controls */}

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
        onClick={() => console.log("click")}
      >
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
}

export default Carousel;
