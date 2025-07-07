import ProfileImage from '../../../public/img1.png';

function ProfileHeader() {
    const userDetail = [{
        userName: "asProgrammer",
        Image: ProfileImage,
        post: 24,
        follower: 1255,
        following: 25
    }]
    return (
        <div className="flex flex-col items-center gap-4 p-4  rounded-md shadow e min-w-[50vw] h-[30vh] ">
            <div className='flex gap-2'>
                <img
                    className="w-12 h-12 rounded-full object-cover"
                    src={userDetail[0].Image}
                    alt="Profile"
                />
                <div className="flex gap-5">
                    <p className="text-lg font-semibold">asProgrammer</p>
                    <button
                        type="button"
                        className="mt-1 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-1.5 focus:outline-none"
                    >
                        Edit Profile
                    </button>
                </div>
            </div>


            {
                userDetail.map((items) => {
                    return (
                        <div className='flex justify-center gap-5 text-gray-500  w-[50%] h-[20%]'>

                            <span>
                                {
                                    items.post
                                } post
                            </span>
                            <span> {
                                items.follower
                            } followers</span>
                            <span>
                                {
                                    items.following
                                } following
                            </span>
                        </div>

                    )


                })
            }
            <p className='font-semibold'>As a programmer </p>
            <p>tutorial that are meant to level up your skills as a programmer .</p>

        </div>
    );
}

export default ProfileHeader;
