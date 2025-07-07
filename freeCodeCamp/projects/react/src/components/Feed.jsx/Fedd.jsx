import Post from '../Post/Post.jsx';
import SkeltonPost from '../Post/SkeltonPost.jsx';
import InfiniteScroll from "react-infinite-scroll-component";

import Image1 from '../../public/img1.png';
import Image2 from '../../public/img2.png';
import Image3 from '../../public/img3.png';
import { useEffect, useState } from 'react';

const allPosts = [
    { username: 'john_doe', image: Image1, caption: 'What a great day!', follow: true },
    { username: 'jane_smith', image: Image2, caption: 'Loving this view 🌄', follow: true },
    { username: 'mariyam', image: Image3, caption: 'Loving this view 🌄', follow: true },
    { username: 'rahul_singh', image: Image1, caption: 'Sunset vibes!', follow: false },
    { username: 'rani_verma', image: Image2, caption: 'Coffee time ☕', follow: true },
    { username: 'vivek_dev', image: Image3, caption: 'Pushing code...', follow: true }
];

function Feed() {
    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [postIndex, setPostIndex] = useState(0);

    const POSTS_PER_LOAD = 3;

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
            loadFunc();
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const loadFunc = () => {
        const nextIndex = postIndex + POSTS_PER_LOAD;
        const nextPosts = allPosts.slice(postIndex, nextIndex);
        setPosts(prev => [...prev, ...nextPosts]);
        setPostIndex(nextIndex);

        if (nextIndex >= allPosts.length) {
            setHasMore(false);
        }
    };

    return (
        <div className="w-full max-w-xl mx-auto">
            {isLoading ? (
                <>
                    {[1, 2, 3].map((_, idx) => (
                        <SkeltonPost key={idx} />
                    ))}
                </>
            ) : (
                <InfiniteScroll
                    dataLength={posts.length}
                    next={loadFunc}
                    hasMore={hasMore}
                    loader={
                        <div className="flex justify-center py-4">
                            <button
                                type="button"
                                className="bg-indigo-500 text-white px-4 py-2 rounded flex items-center gap-2"
                                disabled
                            >
                                <svg
                                    className="w-5 h-5 animate-spin"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8v8H4z"
                                    ></path>
                                </svg>
                                Loading...
                            </button>
                        </div>
                    }
                >
                    {posts.map((post, idx) => (
                        <Post key={idx} {...post} />
                    ))}
                </InfiniteScroll>
            )}
        </div>
    );
}

export default Feed;
