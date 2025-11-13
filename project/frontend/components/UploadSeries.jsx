import React, { useState } from "react";

function UploadSeries() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [loading, setLoading] = useState(false);

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
    const formData = new FormData();
    formData.append("title", title);
    formData.append("genre", genre);
    formData.append("description", description);
    if (thumbnail) formData.append("thumbnail", thumbnail);

    try {
      setLoading(true);
      console.log(formData);
      const res = await fetch("http://localhost:5000/upload/series", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      alert("✅ Series created successfully!");
      console.log(data);
      setTitle("");
      setDescription("");
      setThumbnail(null);
    } catch (err) {
      alert("❌ Error creating series!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="container mt-4 p-4 border rounded bg-light"
      style={{ maxWidth: "600px" }}
    >
      <h2 className="mb-4 fw-bold text-primary text-center">
        🎬 Create Series
      </h2>
      <form onSubmit={handleUpload} encType="multipart/form-data">
        <div className="mb-3">
          <label className="form-label fw-semibold">Series Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label fw-semibold">enter your genre</label>
          <select
            className="form-select"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            required
          >
            <option value="">-- Choose your Genre</option>

            {genres.map((g, index) => {
              return (
                <option key={index} value={g}>
                  {g}
                </option>
              );
            })}
          </select>
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
          <label className="form-label fw-semibold">Thumbnail</label>
          <input
            type="file"
            className="form-control"
            accept="image/*"
            onChange={(e) => setThumbnail(e.target.files[0])}
          />
        </div>

        <button
          type="submit"
          className="btn btn-success w-100"
          disabled={loading}
        >
          {loading ? "Uploading..." : "Upload Series"}
        </button>
      </form>
    </div>
  );
}

export default UploadSeries;
