// components/Post.jsx
import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function Post({ username, image, caption, follow }) {
    return (
        <div className="bg-white border rounded-lg mb-6">
           {/* header */}
           <Header image={image} username={username} follow={follow}/>
            <img src={image} alt="Post" className="w-full " />
            {/* footer */}
            <Footer username={username} caption={caption} />
        </div>
    );
}

export default Post;
