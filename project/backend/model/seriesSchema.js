import mongoose from "mongoose";

const seriesSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    thumbnail: String,
    genre: {
      type: String,
      required: true,
      enum: [
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

      ]
    },
    episodes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Episode" }],
  },
  { timestamps: true }
);

export const Series = mongoose.model("Series", seriesSchema);
