import { NavLink } from "react-router-dom"

function Register() {
    return <>

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
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-white mr-2"> <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /> </svg>
                        REGISTER IN WITH FACEBOOK
                    </button>
                    <button className="inline-flex items-center justify-center rounded-md text-sm font-medium  h-10 px-4 py-2 w-full bg-blue-500 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-white mr-2"> <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /> </svg>
                        REGISTER WITH GOOGLE
                    </button>
                </div>
            </div>
        </div>

    </>
}

export default Register