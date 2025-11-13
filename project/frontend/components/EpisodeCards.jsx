import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function EpisodeCards({ data = [] }) {
  const [epData, setEpData] = useState([]);

  useEffect(() => {
    setEpData(data);
  }, [data]); // ✅ Depend on data, not epData

  if (!epData || epData.length === 0) {
    return <p className="text-center text-light bg-black py-4">No episodes found...</p>;
  }

  return (
    <div className="bg-black text-white p-4">
      <h1 className="mb-4">Episodes</h1>

      <div className="row g-4">
        {epData.map((item) => (
          <div key={item._id} className="col-md-3 col-sm-6 col-lg-2">
            <div className="episode-card shadow-sm rounded-3 bg-dark p-2 text-center">
              {/* Thumbnail */}
              <Link
                to={`/movedetails/episode/${item._id}`}
                className="text-decoration-none text-white"
              >
                <img
                  src={
                    item.videoUrl?.replace(".mp4", ".jpeg") ||
                    item.thumbnailUrl ||
                    "/default-thumbnail.jpg"
                  }
                  alt={item.title}
                  className="img-fluid rounded-2 mb-2"
                />
                <h5 className="fw-bold text-truncate">{item.title || "Untitled"}</h5>
                {item.episodeNumber && (
                  <p className="small text-muted">Episode {item.episodeNumber}</p>
                )}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EpisodeCards;
