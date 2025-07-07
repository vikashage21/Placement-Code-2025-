import authImage from '../../public/auth.png'; // correct image import
import AuthForm from '../../components/AuthForm';

function AuthPage() {
  return (
     <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {/* Left side image */}
      <div className="flex items-center justify-center ">
        <img src={authImage} alt="auth" className=" h-[64vh] object-contain" />
      </div>

        {/* Right side form */}
        {/* adding auth form here */}
        <div className='mt-25'>

      <AuthForm/>
        </div>
    </div>
  )
}

export default AuthPage
