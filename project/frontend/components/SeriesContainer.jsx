import React, { useState, useEffect } from "react";
import SeriesCard from "./SeriesCard";
import '../seriesContainer.css'

function SeriesContainer() {
  const [seriesData, setSeriesData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch series data
  const getData = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/series");
      const data = await res.json();
      console.log("Fetched Series:", data);
      setSeriesData(data);
    } catch (error) {
      console.error("Error fetching series:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="series-container container-fluid py-5 bg-black text-white">
      <h2 className="section-title text-center mb-5">
        Popular <span>Series</span>
      </h2>

      {loading ? (
        <div className="loading-container d-flex justify-content-center align-items-center">
          <div className="spinner-border text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : seriesData.length > 0 ? (
        <div className="row g-4">
          {seriesData.map((s, index) => (
            <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={index}>
              <SeriesCard thumbnail={s.thumbnail} data={s} play={true} />
            
            </div>
          ))}
        </div>
      ) : (
        <h5 className="text-center text-muted mt-4">No series found.</h5>
      )}
    </div>
  );
}

export default SeriesContainer;
