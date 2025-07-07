import { RiPokerHeartsLine, RiPokerHeartsFill } from "react-icons/ri";
import { BiComment } from "react-icons/bi";
import { useState } from "react";

function Footer({ username, caption }) {
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(1000);
    const [comment, setComment] = useState("");

    const handleLikes = () => {
        setLiked(!liked);
        setLikes(prev => liked ? prev - 1 : prev + 1);
    };

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handlePostComment = () => {
        if (comment.trim() !== "") {
            console.log("Posted comment:", comment);
            setComment("");
        }
    };

    return (
        <div className="p-4 space-y-4">
            {/* Like and Comment Icons */}
            <div className="flex items-center gap-4 text-2xl">
                <button onClick={handleLikes} className="hover:text-red-500 transition">
                    {liked ? <RiPokerHeartsFill className="text-red-500" /> : <RiPokerHeartsLine />}
                </button>
                <BiComment />
            </div>

            {/* Like Count and Caption */}
            <div className="space-y-2">
                <div className="text-sm font-semibold">
                    {likes.toLocaleString()} likes
                </div>
                <p>
                    <span className="font-semibold">{username}</span> {caption}
                </p>
            </div>

            <div className="comments-count text-gray-400">
                view all 1000 comments
            </div>

            {/* Comment Input with Post Button Inside */}
            <div className="relative w-full">
                <input
                    type="text"
                    name="comment"
                    value={comment}
                    onChange={handleCommentChange}
                    placeholder="Add a comment..."
                    className="w-full p-2 pr-16 border border-gray-300 rounded"
                />
                <button
                    onClick={handlePostComment}
                    disabled={comment.trim() === ""}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-blue-500 font-semibold disabled:opacity-50"
                >
                    Post
                </button>
            </div>
        </div>
    );
}

export default Footer;
