import mongoose, { model, Schema } from "mongoose";

const useSchema = mongoose.Schema({
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    profilePhoto: { type: String, default: "https://res.cloudinary.com/dsocyzrt7/image/upload/v1761996909/episode_thumbnails/hrchpn3ue9grjczgoczd.png" },
    bio: { type: String, default: "No Bio yet " },
    followers: [{ type: Schema.Types.ObjectId, ref: "User" }],
    following: [{ type: Schema.Types.ObjectId, ref: "User" }],
    bookmark: [{ type: Schema.Types.ObjectId, ref: "Post" }],
    posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],



}, { timestamps: true })


export const User = mongoose.model('User', useSchema)