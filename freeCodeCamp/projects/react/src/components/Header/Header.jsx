import React from 'react'

function Header({ image, username, follow
}) {
  return (
    <div className="p-4 flex items-center gap-2 justify-between">
      <div className="w-10 h-10 rounded-full m-2 flex gap-5 *: bg-gray-200" >
        <img src={image} alt="Post" className="w-full rounded-full  h-full object-cover" />
        <span className="font-semibold">{username}</span>
        <span className='text-gray-500 '>.1w</span>
      </div>
      <span className='text-blue-500 cursor-pointer'>{follow ? "unfollow" : "follow"}</span>
    
    </div>
  )
}

export default Header
