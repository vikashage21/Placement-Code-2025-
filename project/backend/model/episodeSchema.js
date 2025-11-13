import mongoose from "mongoose";

const episodeSchema = new mongoose.Schema(
  {
    seriesId: { type: mongoose.Schema.Types.ObjectId, ref: "Series", required: true },
    title: { type: String, required: true },
    description: String,
    videoUrl: String,
    duration: String,
    episodeNumber: Number,
  },
  { timestamps: true }
);

export const Episode = mongoose.model("Episode", episodeSchema);
