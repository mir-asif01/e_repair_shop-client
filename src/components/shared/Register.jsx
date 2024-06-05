import { useContext } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import toast, { Toaster } from "react-hot-toast"

function Register() {
    const { user, signInWithGoogle, signInWithFacebook, registerWithEmailPass } = useContext(AuthContext)
    console.log(user);
    const navigate = useNavigate()
    const googleLoginHandler = async () => {

        try {
            const res = await signInWithGoogle()
            const userInfo = res?.user

            const userInfoToSaveInDb = {
                displayName: userInfo?.displayName,
                email: userInfo?.email,
                photoURL: userInfo?.photoURL
            }

            fetch(`https://e-repair-shop-server.vercel.app/signup`, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(userInfoToSaveInDb)
            }).then(res => res.json())
                .then(res => {
                    toast.success("Registration succesful")
                    localStorage.setItem("token", res?.token)
                    navigate("/")
                })

        } catch (error) {
            console.log(error);
        }
    }

    const handleFacebookLogin = async () => {
        try {
            const res = await signInWithFacebook()
            toast.success("Facebook login successful")
        } catch (error) {
            toast.error(`${error.message}`)
            console.log(error);
        }
    }

    const handleEmailPasswordRegitration = async (e) => {
        e.preventDefault()

        try {
            const form = e.target
            const email = form.email.value
            const password = form.password.value
            const displayName = form.username.value
            if (!email || !displayName || !password) {
                toast.error("Input can not be empty")
            }
            const user = { email, displayName, photoURL: "" }
            const res = await registerWithEmailPass(email, password)
            fetch(`https://e-repair-shop-server.vercel.app/signup`, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(user)
            }).then(res => res.json())
                .then(res => {
                    toast.success("Registration with email-pass succesful")
                    form.reset()
                    // localStorage.setItem("token", res?.token)
                    navigate("/")
                })



            console.log({ email, displayName, password });
        } catch (error) {
            toast.error(`${error.message}`)
        }


    }

    return <>
        <Toaster position="top-center" toastOptions={{ duration: 4000 }} reverseOrder={false}></Toaster>
        <div className="max-w-[800px] mx-auto my-12 p-6 bg-white shadow-md sm:px-8 sm:py-10 lg:px-12 lg:py-16">
            <div className="flex flex-col sm:flex-row justify-between space-x-0 sm:space-x-12">
                <div className="w-full sm:w-1/2 mb-8 sm:mb-0">
                    {/* Left side form */}
                    <h2 className="text-2xl font-bold mb-6">Register</h2>
                    <form onSubmit={handleEmailPasswordRegitration}>
                        <div className="flex flex-col space-y-4 mb-4">
                            <input required className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none" name="username" placeholder="Username" type="text" />
                            <input required className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none" name="email" placeholder="Email" type="text" />
                            <input required className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none" name="password" placeholder="Password" type="password" />
                            <input type="submit" value="REGISTER" className="inline-flex items-center justify-center rounded-md text-sm font-medium  h-10 px-4 py-2 w-full bg-red-600 text-white cursor-pointer" />
                        </div>
                        {/* <button className="inline-flex items-center justify-center rounded-md text-sm font-medium  h-10 px-4 py-2 w-full bg-red-600 text-white">
                            <NavLink to="/register">REGISTER</NavLink>
                        </button> */}
                    </form>
                </div>
                {/* Right side content */}
                <div className="w-full sm:w-1/2">
                    <p className="text-sm mb-6">
                        If you don&apos;t already have an account click the button below to create your account.
                    </p>
                    <button className="inline-flex items-center justify-center rounded-md text-sm font-medium  h-10 px-4 py-2 w-full mb-2 bg-black text-white">
                        <NavLink to="/login">Already a user ? Login here,</NavLink>
                    </button>
                    <p className="text-center my-4">OR</p>
                    <button onClick={handleFacebookLogin} className="inline-flex items-center justify-center rounded-md text-sm font-medium  h-10 px-4 py-2 w-full mb-2 bg-blue-600 text-white">
                        REGISTER IN WITH FACEBOOK
                    </button>
                    <button onClick={googleLoginHandler} className="inline-flex items-center justify-center rounded-md text-sm font-medium  h-10 px-4 py-2 w-full bg-blue-500 text-white">
                        REGISTER WITH GOOGLE
                    </button>
                </div>
            </div>
        </div>

    </>
}

export default Register