
import { useContext, useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import toast, { Toaster } from "react-hot-toast"

export const Navbar = () => {
    const [dropDownState, setDropDownState] = useState(false);
    const dropDownMenuRef = useRef();

    useEffect(() => {
        const closeDropDown = (e) => {
            if (!dropDownMenuRef?.current?.contains(e?.target)) {
                setDropDownState(false);
            }
        };

        document.addEventListener('mousedown', closeDropDown);

        return () => {
            document.removeEventListener('mousedown', closeDropDown);
        };
    }, []);
    const { logOut, setUser, user } = useContext(AuthContext)

    const handleLogOut = async () => {
        try {
            const res = await logOut()
            toast.success("Logout successful")
            setUser(null)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <nav className="flex items-center justify-between bg-[#393E46] px-4 py-2 text-white">
            <Toaster position="top-center" toastOptions={{ duration: 4000 }} reverseOrder={false}></Toaster>
            <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
                <h2>e_repair</h2>
            </div>
            <ul className="hidden items-center justify-between gap-10 md:flex">
                <li className="group flex  cursor-pointer flex-col">
                    <NavLink to="/">Home</NavLink>
                    <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                </li>
                {
                    user?.email
                        ? <>
                            <li className="group flex  cursor-pointer flex-col">
                                <NavLink to="/add-order">Add Order</NavLink>
                                <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                            </li>
                            <li className="group flex  cursor-pointer flex-col">
                                <NavLink to="/add-feedback">Add Feedback</NavLink>
                                <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                            </li>
                            <li className="group flex  cursor-pointer flex-col">
                                <NavLink to="/profile">Profile</NavLink>
                                <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                            </li>
                            <li className="group flex  cursor-pointer flex-col">
                                <button onClick={handleLogOut}>Logout</button>
                                <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                            </li>
                            <li className="group flex  cursor-pointer flex-col">
                                <NavLink className="bg-emerald-500 px-2 py-1 rounded-md " to="/dashboard">Dashboard</NavLink>
                                <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                            </li>
                        </>
                        : <>
                            <li className="group flex  cursor-pointer flex-col">
                                <NavLink to="/login">Login</NavLink>
                                <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                            </li>
                            <li className="group flex  cursor-pointer flex-col">
                                <NavLink to="/register">Register</NavLink>
                                <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                            </li>
                        </>
                }

            </ul>
            <div ref={dropDownMenuRef} onClick={() => setDropDownState(!dropDownState)} className="relative flex transition-transform md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer" > <line x1="4" x2="20" y1="12" y2="12" /> <line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /> </svg>
                {dropDownState && (
                    <ul className=" z-10  gap-2  bg-[#393E46]  absolute right-0 top-11 flex w-[200px] flex-col  rounded-lg   text-base ">
                        <li className="cursor-pointer  px-6 py-2 text-white rounded-t-lg hover:bg-sky-600 ">
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                            <NavLink to="/login">Login</NavLink>
                        </li>
                        <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                            <NavLink to="/register">Register</NavLink>
                        </li>
                        <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                            <NavLink to="/add-order">Add Order</NavLink>
                        </li>
                        <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                            <NavLink to="/add-feedback">Add Feedback</NavLink>
                        </li>
                        <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                            <NavLink className="bg-emerald-500 px-2 py-1 rounded-md " to="/dashboard">Dashboard</NavLink>
                        </li>
                    </ul>
                )}
            </div>
        </nav>


    );
};

export default Navbar