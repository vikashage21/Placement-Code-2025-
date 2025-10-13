const mongoose = require("mongoose");
const review = require("../models/reviews");
const user = require("../models/user");

const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  image: {
    url: {
      type: String,
      default:
        "https://res.cloudinary.com/demo/image/upload/v1691500000/default-listing.jpg",
    },
    filename: {
      type: String,
      default: "default-image",
    },
  },
  price: {
    type: Number,
    required: true,
  },
  location: {
    type: String, // City name, address, etc.
    required: true,
  },
  country: {
    type: String,
    required: true,
  },

  // 🗺️ New field for coordinates
  geometry: {
    type: {
      type: String,
      enum: ["Point"],
      default: "Point",
    },
    coordinates: {
      type: [Number], // [longitude, latitude]
      default: [77.2090, 28.6139], // Default: Delhi
    },
  },

  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "review",
    },
  ],

  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

// 🧹 Middleware to delete reviews when listing is removed
listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await review.deleteMany({
      _id: { $in: listing.reviews },
    });
  }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
