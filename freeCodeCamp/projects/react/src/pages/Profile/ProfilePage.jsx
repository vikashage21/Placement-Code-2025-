import ProfileHeader from "./ProfileHeader/ProfileHeader"
import ProfilePost from "./ProfilePost"
import Slider from "./Slider"
function ProfilePage() {
  return (
    <div className="flex  flex-col justify-center items-center mx-auto text-center">
      {/* header */}
      <ProfileHeader/>
      {/* slider */}
      <Slider/>

      {/* footer */}
      <ProfilePost/>
      
    </div>
  )
}

export default ProfilePage
