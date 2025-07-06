import { useState } from "react"
import GoogleImg from '../public/google.png'
import PlayStoreImg from '../public/playstore.png'
import MicrosoftImg from '../public/microsoft.png'
import { useNavigate } from "react-router-dom";



function AuthForm() {

    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate()
    const [userData, setUserData] = useState({
        Email: "",
        Password: "",
        ConfrimPassword: ""
    })

    const handelSubmitForm = (e) => {
        e.preventDefault();
        console.log(userData)
        if (!userData.Email || !userData.Password) {
            alert("Please fill all the fields")
            return
        }
        navigate("/")

    }

    const handelInputChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevUserData) => ({
            ...prevUserData,
            [name]: value,
        }));

    }
    return (
        <div className="flex flex-col gap-5">
            <div className="flex flex-col md:flex-row h-[64vh] gap-8 border p-6 rounded-lg shadow-lg bg-white">



                <div className="flex flex-col justify-center items-center">
                    <form onSubmit={handelSubmitForm} className="flex flex-col gap-4 w-64">
                        <h1 className="text-2xl font-bold font-instagram text-center">Instagram</h1>
                        <label htmlFor="Email"></label>

                        <input
                            type="email"
                            placeholder="Email"
                            name="Email"
                            value={userData.Email}
                            onChange={handelInputChange}
                            className="border px-4 py-2 rounded"
                        />

                        <label htmlFor="Password"></label>
                        <input
                            type="password"
                            placeholder="Password"
                            name="Password"
                            value={userData.Password}
                            onChange={handelInputChange}

                            className="border px-4 py-2 rounded"
                        />

                        {
                            !isLogin ? (<>  <label htmlFor="ConfrimPassword"></label>
                                <input
                                    type="password"
                                    placeholder="Confrim Password"
                                    name="ConfrimPassword"
                                    value={userData.ConfrimPassword}
                                    onChange={handelInputChange}

                                    className="border px-4 py-2 rounded" />

                            </>
                            ) : null
                        }
                        <button type="submit"

                            className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
                        >
                            {
                                isLogin ? "Log in " : "Sign up"
                            }
                        </button>

                        <div className="line flex gap-2  justify-center items-center">
                            <div className='h-[0.5px] w-full bg-black  font-semibold text-2xl'>

                            </div>
                            <p className='text-2xl font-semibold'>OR</p>
                            <div className='h-[0.5px] w-full bg-black  font-semibold text-2xl'>

                            </div>


                        </div>
                        <div className="google-btn flex gap-5 justify-center items-center text-center">

                            <img className="w-5" src={GoogleImg} alt="" />
                            <span className="text-blue-500 font-semibold">Login with Google</span>
                        </div>
                    </form>
                </div>





            </div>
            <div className="w-full h-20 border gap-2 p-5 flex items-center text-center mx-auto rounded-sm">
                {
                    isLogin ? "Don't have an account" : "Already have an account"
                }
                <span className="text-blue-500 " onClick={() => setIsLogin(!isLogin)}>
                    {
                        !isLogin ? "Login " : "Sign up"
                    }
                </span>
            </div>
            <span className="text-center">
                <p>Get the app.</p>
            </span>

            <div className=" flex gap-5 w-30 justify-center items-center mx-auto">
                <img src={PlayStoreImg} alt="" />
                <img src={MicrosoftImg} alt="" />

            </div>
        </div>

    )
}

export default AuthForm
