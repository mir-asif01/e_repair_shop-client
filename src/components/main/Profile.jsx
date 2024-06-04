import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../context/AuthContext"

function Profile() {
    const { user } = useContext(AuthContext)
    const [orders, setOrders] = useState([])
    useEffect(() => {
        const getAllOrders = async () => {
            try {
                fetch(`http://localhost:3000/users-orders?email=${user?.email}`)
                    .then(res => res.json())
                    .then(res => setOrders(res))
            } catch (error) {
                console.log(error);
            }
        }
        getAllOrders()
    }, [])
    return <>
        <h1>Hello {user?.email}</h1>
        <h1><span className="text-5xl">{orders ? orders.length : 0}</span> number of orders</h1>
    </>
}

export default Profile