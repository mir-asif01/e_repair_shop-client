import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import toast, { Toaster } from "react-hot-toast"

function Register() {
    const { signInWithGoogle } = useContext(AuthContext)

    const googleLoginHandler = async () => {

        try {
            const res = await signInWithGoogle()
            toast.success("Register successful")

        } catch (error) {
            console.log(error);
        }
    }

    return <>
        <Toaster position="top-center" toastOptions={{ duration: 4000 }} reverseOrder={false}></Toaster>
        <div className="max-w-[800px] mx-auto my-12 p-6 bg-white shadow-md sm:px-8 sm:py-10 lg:px-12 lg:py-16">
            <div className="flex flex-col sm:flex-row justify-between space-x-0 sm:space-x-12">
                <div className="w-full sm:w-1/2 mb-8 sm:mb-0">
                    {/* Left side form */}
                    <h2 className="text-2xl font-bold mb-6">Register</h2>
                    <form>
                        <div className="flex flex-col space-y-4 mb-4">
                            <input className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none" placeholder="Username" type="text" />
                            <input className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none" placeholder="Email" type="text" />
                            <input className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none" placeholder="Password" type="password" />
                        </div>
                        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium  h-10 px-4 py-2 w-full bg-red-600 text-white">
                            <NavLink to="/register">REGISTER</NavLink>
                        </button>
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
                    <button className="inline-flex items-center justify-center rounded-md text-sm font-medium  h-10 px-4 py-2 w-full mb-2 bg-blue-600 text-white">
                        REGISTER IN WITH GITHUB
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