// components/Suggestions.jsx
import Image1 from '../../public/img1.png'
import Image2 from '../../public/img2.png'

const dummySuggestions = [
  { username: 'tech_guy', fullName: 'Rahul Kumar', image: Image1 },
  { username: 'fit_life', fullName: 'Sneha Sharma', image: Image2 },
  { username: 'coder123', fullName: 'Vikash Kumar', image: null },
];

function Suggestions() {
  return (
    <div className="w-80 hidden lg:block">
      <h2 className="font-semibold mb-4 text-gray-600">Suggestions for you</h2>
      <div className="flex flex-col gap-4">
        {dummySuggestions.map((user, idx) => (
          <div key={idx} className="flex items-center justify-between">
            <div className='flex gap-2 m-2'>
              <div className=' rounded-full w-10 bg-white h-10 '>

                <img src={user.image} alt="Post" className="w-full bg-center bg-cover rounded-full h-full object-cover" />
              </div>
              <div>
                <p className=" text-gray-600 font-semibold">{user.username}</p>
                <span className='text-gray-400'><p>759 followers</p></span>
              </div>

            </div>
            <button className="text-blue-500 text-sm font-semibold hover:underline">
              Follow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Suggestions;
