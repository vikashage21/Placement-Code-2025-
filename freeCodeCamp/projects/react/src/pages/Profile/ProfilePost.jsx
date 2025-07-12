import { useEffect, useState } from 'react';
import { FaHeart, FaComment } from 'react-icons/fa';
import Image1 from '../../public/img1.png';
import Image2 from '../../public/img2.png';
import Image3 from '../../public/img3.png';

function ProfilePost() {
    const [isLoading, setIsLoading] = useState(true);
    const [selectedPost, setSelectedPost] = useState(null); // for modal

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    const posts = [
        { image: Image1, likes: 120, comments: 45 },
        { image: Image2, likes: 200, comments: 78 },
        { image: Image3, likes: 99, comments: 21 }
    ];

    const handleModalOpen = (post) => {
        setSelectedPost(post);
    };

    const handleModalClose = () => {
        setSelectedPost(null);
    };

    return (
        <div className="w-full px-4 mt-5">
            <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
                    {!isLoading ? (
                        posts.map((post, idx) => (
                            <div
                                key={idx}
                                className="relative group aspect-square w-full overflow-hidden rounded-lg cursor-pointer"
                            >
                                <img
                                    onClick={() => handleModalOpen(post)}
                                    src={post.image}
                                    alt={`Post ${idx + 1}`}
                                    className="w-full h-full object-cover"
                                />

                                <div className="absolute inset-0 bg-black bg-opacity-40 hidden group-hover:flex items-center justify-center gap-4 text-white text-sm font-semibold">
                                    <span className="flex items-center gap-1">
                                        <FaHeart className="text-red-400" /> {post.likes}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <FaComment className="text-blue-300" /> {post.comments}
                                    </span>
                                </div>
                            </div>
                        ))
                    ) : (
                        Array(3)
                            .fill(null)
                            .map((_, idx) => (
                                <div
                                    key={idx}
                                    className="aspect-square w-full bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse"
                                />
                            ))
                    )}
                </div>
            </div>

            {/* Modal */}
            {selectedPost && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg overflow-hidden w-full max-w-lg p-4 relative">
                        <button
                            onClick={handleModalClose}
                            className="absolute top-2 right-2 text-gray-700 hover:text-black text-lg"
                        >
                            ✕
                        </button>
                        <img
                            src={selectedPost.image}
                            alt="modal"
                            className="w-full h-auto rounded"
                        />
                        <div className="flex justify-around mt-4 text-gray-700 font-semibold text-lg">
                            <span className="flex items-center gap-2">
                                <FaHeart className="text-red-500" /> {selectedPost.likes} Likes
                            </span>
                            <span className="flex items-center gap-2">
                                <FaComment className="text-blue-500" /> {selectedPost.comments} Comments
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProfilePost;
