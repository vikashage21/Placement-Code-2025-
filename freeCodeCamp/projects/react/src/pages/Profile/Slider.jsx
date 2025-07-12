import { FaRegImages, FaBookmark, FaHeart } from 'react-icons/fa'; // Importing icons
import React from 'react';

function Slider() {
    return (
        <div className="border-b border-gray-200 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">

                {/* Post Tab */}
                <li className="me-2">
                    <a
                        href="#"
                        className="inline-flex items-center justify-center p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group"
                        aria-current="page"
                    >
                        <FaRegImages className="w-4 h-4 me-2" />
                        Post
                    </a>
                </li>

                {/* Saved Tab */}
                <li className="me-2">
                    <a
                        href="#"
                        className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                    >
                        <FaBookmark className="w-4 h-4 me-2" />
                        Saved
                    </a>
                </li>

                {/* Likes Tab */}
                <li className="me-2">
                    <a
                        href="#"
                        className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                    >
                        <FaHeart className="w-4 h-4 me-2" />
                        Likes
                    </a>
                </li>

            </ul>
        </div>
    );
}

export default Slider;
