import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function UploadVideo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [uploadedBy, setUploadedBy] = useState("");
  const [genre, setGenre] = useState("");
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // 🎬 Allowed genres (case-sensitive)
  const genres = [
    "Action",
    "Drama",
    "Comedy",
    "Thriller",
    "Romance",
    "Sci-Fi",
    "Horror",
    "Adventure",
    "Fantasy",
    "Documentary",
  ];

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!video) {
      alert("⚠️ Please select a video file!");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("genre", genre);
    formData.append("uploadedBy", uploadedBy);
    formData.append("video", video);

    try {
      setLoading(true);

      const res = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ Video uploaded successfully!");
        console.log("Uploaded:", data);

        // Reset form
        setTitle("");
        setDescription("");
        setUploadedBy("");
        setGenre("");
        setVideo(null);

        navigate("/");
      } else {
        alert(`❌ Upload failed: ${data.error}`);
      }
    } catch (err) {
      console.error("Upload error:", err);
      alert("❌ Something went wrong while uploading.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="container mt-4 p-4 border rounded shadow-sm bg-light"
      style={{ maxWidth: "600px" }}
    >
      <h2 className="text-center mb-4 fw-bold text-primary">🎥 Upload Video</h2>

      <form onSubmit={handleUpload} encType="multipart/form-data">
        {/* Title */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Video Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter video title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        {/* Genre Dropdown */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Select Genre</label>
          <select
            className="form-select"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            required
          >
            <option value="">-- Choose Genre --</option>
            {genres.map((g, index) => (
              <option key={index} value={g}>
                {g}
              </option>
            ))}
          </select>
        </div>

        {/* Description */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Description</label>
          <textarea
            className="form-control"
            placeholder="Enter video description"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* Uploaded By */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Uploaded By</label>
          <input
            type="text"
            className="form-control"
            placeholder="Your name"
            value={uploadedBy}
            onChange={(e) => setUploadedBy(e.target.value)}
          />
        </div>

        {/* Video Upload */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Choose Video File</label>
          <input
            type="file"
            className="form-control"
            accept="video/*"
            onChange={(e) => setVideo(e.target.files[0])}
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-success w-100 py-2 fw-bold"
          disabled={loading}
        >
          {loading ? "Uploading..." : "Upload Video"}
        </button>
      </form>
    </div>
  );
}

export default UploadVideo;
