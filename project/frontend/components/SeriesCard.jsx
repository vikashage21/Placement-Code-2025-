import React from "react";
import { Link } from "react-router-dom";
import ProductDesc from "./ProductDesc";
import "../CardSeries.css";

function SeriesCard({ data, play , thumbnail }) {
  const firstEpisode = data.episodes?.[0];

  const thumbnailURl =
    firstEpisode?.videoUrl?.replace(".mp4", ".jpeg") ||
    "https://via.placeholder.com/300x400?text=No+Thumbnail";

    console.log(data)

    console.log(thumbnail)

  return (
    <div className={play ? "container-fluid py-5 bg-black" : "bg-transparent"}>
      {/* Section heading */}
      {!play && (
        <>
          <hr className="text-secondary" />
          <h2 className="text-white mb-4 fw-bold">Trending Now</h2>
        </>
      )}

      <div className={play ? "" : "row g-4"}>
        <div
          key={data._id}
          className={play ? "w-100" : "col-md-3 col-sm-6 col-lg-2"}
        >
          <Link
            to={`/movedetails/series/${data._id}`}
            className="text-decoration-none text-light"
          >
            <div
              className={
                play
                  ? "w-100 h-100"
                  : "movie-card shadow-sm rounded-3 position-relative overflow-hidden"
              }
            >
              {/* Thumbnail or Video */}
              {play ? (
                <>
                  <img
                    src={thumbnail}
                    className="rounded-2 w-100"
                    style={{
                      height: "20vh",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  ></img>

                  
                 
                </>
              ) : (
                <img
                  src={thumbnailURl}
                  className="card-img-top rounded-2"
                  alt={data.title}
                  style={{ height: "20vh", width: "full", objectFit: "cover" }}
                />
              )}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SeriesCard;
