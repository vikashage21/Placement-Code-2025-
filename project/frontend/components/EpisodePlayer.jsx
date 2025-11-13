import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EpisodePlayer = () => {
  const { epId } = useParams(); // ✅ get episode ID from URL
  const [episodeData, setEpisodeData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all episodes
  async function getEpisodeData() {
    try {
      const res = await fetch("http://localhost:5000/api/episodes");
      const data = await res.json();
      setEpisodeData(data);
    } catch (error) {
      console.error("Error fetching episodes:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getEpisodeData();
  }, []);

  // Find the specific episode by ID
  const singleEp = episodeData.find((e) => e._id === epId);

  if (loading) {
    return <p className="text-light text-center py-5">Loading episode...</p>;
  }

  if (!singleEp) {
    return <p className="text-light text-center py-5">Episode not found.</p>;
  }

  return (
    <div className="container-fluid bg-black text-white py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10">
          {/* 🎥 Video Player */}
          <video
            src={singleEp.videoUrl}
            controls
            autoPlay
            className="w-100 rounded-3"
            style={{ height: "60vh" }}
          />

          {/* 📜 Episode Info */}
          <div className="mt-4">
            <h2 className="fw-bold">{singleEp.title}</h2>
            {singleEp.episodeNumber && (
              <p className="text-secondary">
                Episode {singleEp.episodeNumber}
              </p>
            )}
            <p>{singleEp.description || "No description available."}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EpisodePlayer;
