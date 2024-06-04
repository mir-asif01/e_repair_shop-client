import { useContext } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import toast, { Toaster } from "react-hot-toast"

function Login() {

    const { signInWithGoogle, signInWithFacebook, loginViaEmailPass } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleGooleLogin = async () => {
        try {
            const res = await signInWithGoogle()
            toast.success("Login Successful")
            navigate("/")
        } catch (error) {
            console.log(error);
        }
    }
    const handleFacebookLogin = async () => {
        try {
            const res = await signInWithFacebook()
            toast.success("Facebook login successful")
            navigate("/")
        } catch (error) {
            toast.error(`${error.message}`)
            console.log(error);
        }
    }

    const handleLoginViaEmailPass = async (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        try {
            const res = await loginViaEmailPass(email, password)
            toast.success("Login via email-pass succes")
            form.reset()
            navigate("/")
        } catch (error) {
            toast.error(`${error.message}`)
        }

    }

    return <>
        <div className="max-w-[800px] mx-auto my-12 p-6 bg-white shadow-md sm:px-8 sm:py-10 lg:px-12 lg:py-16">
            <Toaster position="top-center" toastOptions={{ duration: 4000 }} reverseOrder={false}></Toaster>
            <div className="flex flex-col sm:flex-row justify-between space-x-0 sm:space-x-12">
                <div className="w-full sm:w-1/2 mb-8 sm:mb-0">
                    {/* Left side form */}
                    <h2 className="text-2xl font-bold mb-6">Login</h2>
                    <form onSubmit={handleLoginViaEmailPass}>
                        <div className="flex flex-col space-y-4 mb-4">
                            <input className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none" name="email" placeholder="Email" type="text" />
                            <input className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none" name="password" placeholder="Password" type="password" />
                            <input value="LOG IN" type="submit" className="inline-flex items-center justify-center rounded-md text-sm font-medium  h-10 px-4 py-2 w-full bg-red-600 text-white cursor-pointer" />
                        </div>

                    </form>
                </div>
                {/* Right side content */}
                <div className="w-full sm:w-1/2">
                    <p className="text-sm mb-6">
                        If you don&apos;t already have an account click the button below to create your account.
                    </p>
                    <button className="inline-flex items-center justify-center rounded-md text-sm font-medium  h-10 px-4 py-2 w-full mb-2 bg-black text-white">
                        <NavLink to="/register">REGISTER</NavLink>
                    </button>
                    <p className="text-center my-4">OR</p>
                    <button onClick={handleFacebookLogin} className="inline-flex items-center justify-center rounded-md text-sm font-medium  h-10 px-4 py-2 w-full mb-2 bg-blue-600 text-white">
                        LOGIN WITH FACEBOOK
                    </button>
                    <button onClick={handleGooleLogin} className="inline-flex items-center justify-center rounded-md text-sm font-medium  h-10 px-4 py-2 w-full bg-blue-500 text-white">
                        LOGIN WITH GOOGLE
                    </button>
                </div>
            </div>
        </div>

    </>
}

export default Login