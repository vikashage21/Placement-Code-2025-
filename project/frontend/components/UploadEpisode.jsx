import React, { useState, useEffect } from "react";

function UploadEpisode() {
  const [seriesList, setSeriesList] = useState([]);
  const [seriesId, setSeriesId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [episodeNumber, setEpisodeNumber] = useState("");
  const [video, setVideo] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSeries = async () => {
      const res = await fetch("http://localhost:5000/api/series");
      const data = await res.json();
      setSeriesList(data);
    };
    fetchSeries();
  }, []);

  const handleUpload = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("seriesId", seriesId);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("episodeNumber", episodeNumber);
    if (video) formData.append("video", video);
    if (thumbnail) formData.append("thumbnail", thumbnail);

    try {
      setLoading(true);
      const res = await fetch("http://localhost:5000/upload/episode", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      alert("✅ Episode uploaded successfully!");
      console.log(data);
    } catch (err) {
      alert("❌ Upload failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4 p-4 border rounded bg-light" style={{ maxWidth: "600px" }}>
      <h2 className="mb-4 text-primary fw-bold text-center">📺 Upload Episode</h2>
      <form onSubmit={handleUpload} encType="multipart/form-data">
        <div className="mb-3">
          <label className="form-label fw-semibold">Select Series</label>
          <select
            className="form-select"
            value={seriesId}
            onChange={(e) => setSeriesId(e.target.value)}
            required
          >
            <option value="">-- Choose a Series --</option>
            {seriesList.map((s) => (
              <option key={s._id} value={s._id}>
                {s.title}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Episode Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Description</label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="3"
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Episode Number</label>
          <input
            type="number"
            className="form-control"
            value={episodeNumber}
            onChange={(e) => setEpisodeNumber(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Thumbnail</label>
          <input
            type="file"
            className="form-control"
            accept="image/*"
            onChange={(e) => setThumbnail(e.target.files[0])}
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Video File</label>
          <input
            type="file"
            className="form-control"
            accept="video/*"
            onChange={(e) => setVideo(e.target.files[0])}
            required
          />
        </div>

        <button type="submit" className="btn btn-success w-100" disabled={loading}>
          {loading ? "Uploading..." : "Upload Episode"}
        </button>
      </form>
    </div>
  );
}

export default UploadEpisode;
