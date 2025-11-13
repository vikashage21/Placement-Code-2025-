import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import Video from "./model/videoSchema.js";
import { Series } from "./model/seriesSchema.js";
import { Episode } from "./model/episodeSchema.js";

// Config dotenv
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.log("❌ MongoDB connection error:", err));

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

/* ============================================================
   🎥 Upload Single Video
============================================================ */
app.post("/upload", upload.single("video"), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path, {
      resource_type: "video",
      folder: "uploads_videos",
    });

    const newVideo = new Video({
      title: req.body.title,
      description: req.body.description,
      genre: req.body.genre,
      videoUrl: result.secure_url,
      uploadedBy: req.body.uploadedBy || "Anonymous",
    });

    await newVideo.save();
    res.status(201).json(newVideo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ============================================================
   🎬 Upload Series
============================================================ */
app.post("/upload/series", upload.single("thumbnail"), async (req, res) => {
  try {
    let thumbnailUrl = "";

    if (req.file) {
      const uploadResult = await cloudinary.uploader.upload(req.file.path, {
        folder: "series_thumbnails",
      });
      thumbnailUrl = uploadResult.secure_url;

    }


    const newSeries = new Series({
      title: req.body.title,
      description: req.body.description,
      genre: req.body.genre,

      thumbnail: thumbnailUrl,
    });
    console.log(newSeries)
    await newSeries.save();
    res.status(201).json({ message: "✅ Series created successfully!", newSeries });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ============================================================
   🎞️ Upload Episode
============================================================ */
app.post("/upload/episode", upload.fields([{ name: "video" }, { name: "thumbnail" }]), async (req, res) => {
  try {
    const { seriesId, title, description, episodeNumber } = req.body;
    if (!seriesId) return res.status(400).json({ error: "Series ID is required" });

    // Upload video
    const videoResult = req.files["video"]
      ? await cloudinary.uploader.upload(req.files["video"][0].path, {
        resource_type: "video",
        folder: "episodes_videos",
      })
      : null;

    // Upload thumbnail
    const thumbnailResult = req.files["thumbnail"]
      ? await cloudinary.uploader.upload(req.files["thumbnail"][0].path, {
        folder: "episode_thumbnails",
      })
      : null;

    const newEpisode = new Episode({
      seriesId,
      title,
      description,
      episodeNumber,
      videoUrl: videoResult?.secure_url,
      thumbnailUrl: thumbnailResult?.secure_url,
    });

    await newEpisode.save();
    await Series.findByIdAndUpdate(seriesId, { $push: { episodes: newEpisode._id } });

    res.status(201).json({ message: "✅ Episode uploaded successfully!", newEpisode });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ============================================================
   📁 GET Routes
============================================================ */
app.get("/api/videos", async (req, res) => {
  try {
    const videos = await Video.find().sort({ createdAt: -1 });
    res.json(videos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/api/series", async (req, res) => {
  try {
    const allSeries = await Series.find().populate("episodes").sort({ createdAt: -1 });
    res.json(allSeries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/api/episodes", async (req, res) => {
  try {
    const episodes = await Episode.find().populate("seriesId", "title").sort({ createdAt: -1 });
    res.json(episodes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



/* ============================================================
   🚀 Start Server
============================================================ */
app.listen(process.env.PORT, () => {
  console.log(`✅ Server running on port ${process.env.PORT}`);
});
