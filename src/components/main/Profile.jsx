import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import dummy from "../../assets/dummy.jpg"
import { NavLink } from "react-router-dom"
import Order_card from "./profile_components/Order_card"

function Profile() {
    const { user } = useContext(AuthContext)
    const [orders, setOrders] = useState([])
    const [userInfo, setUserInfo] = useState({})

    const token = localStorage.getItem("token")

    useEffect(() => {
        async function getUserInfoFromDB() {
            try {
                await fetch(`https://e-repair-shop-server.vercel.app/user-info?email=${user?.email}`)
                    .then(res => res.json())
                    .then(res => setUserInfo(res))
            } catch (error) {
                console.log(error);
            }
        }
        getUserInfoFromDB()
    }, [])

    useEffect(() => {
        const getAllOrders = async () => {
            try {
                fetch(`https://e-repair-shop-server.vercel.app/users-orders?email=${user?.email}`, {
                    headers: {
                        "content-type": "application/json",
                        authorization: `Bearer ${token}`,
                    }
                })
                    .then(res => res.json())
                    .then(res => setOrders(res))
            } catch (error) {
                console.log(error);
            }
        }
        getAllOrders()
    }, [])
    return <>
        <section className="flex justify-center items-center p-4 md:p-16">
            <div className="flex flex-col justify-center items-center border border-gray-100 hover:shadow-md rounded-md p-7">
                <img className="w-56 h-56 rounded" src={userInfo?.photoURL ? userInfo?.photoURL : dummy} alt="" />
                <h1 className="text-3xl my-2">Username : {userInfo?.displayName}</h1>
                <h1 className="text-3xl my-2">Email : {userInfo?.email}</h1>
                <h1 className="text-4xl text-fuchsia-500 font-bold">Number of orders : {orders ? orders.length : 0}</h1>
                <NavLink className="my-10 inline-flex items-center justify-center rounded-md text-sm font-medium  h-10 px-4 py-2 w-full bg-orange-500 text-white cursor-pointer"
                    to={`/profile/edit/${userInfo?._id}`}>Edit</NavLink>
            </div>
        </section>
        <section className="flex justify-center items-center p-4 md:p-16">
            <div className="flex flex-col gap-10 justify-center items-center p-3 sm:p-2">
                <h1 className="text-5xl text-center">Your Orders___</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {
                        orders.map((od) => <Order_card key={od._id} od={od} orders={orders} setOrders={setOrders}></Order_card>)
                    }
                </div>
            </div>
        </section>
    </>
}

export default Profile