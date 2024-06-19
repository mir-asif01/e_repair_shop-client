import { NavLink } from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast'

function Order_card({ od, orders, setOrders }) {
    const { _id, orderEmail, orderName, orderDesc, productName } = od
    const token = localStorage.getItem("token")

    const handleOrderDelete = async (id) => {
        try {
            setOrders(orders.filter(od => od._id !== id))
            await fetch(`http://localhost:3000/delete-order/${id}`, {
                method: "DELETE",
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${token}`,
                },
            }).then((res) => res.json())
                .then(res => {
                    toast.success("Order Deleted Succesfully")
                })
        } catch (error) {
            console.log(error);
        }
    }

    return <>
        <Toaster position='top-center' reverseOrder={false} toastOptions={{ duration: 40000 }}></Toaster>
        <div className="p-3 md:p-10 border border-gray-100 hover:shadow-md rounded-md">
            <h1 className="font-bold">Title : {orderName}</h1>
            <h1 className="text-2xl text-gray-400">{productName}</h1>
            <p className="text-2xl text-gray-400">{orderDesc.length > 10 ? orderDesc.slice(0, 10) + "..." : orderDesc}</p>
            <h1>{orderEmail}</h1>
            <div className="flex justify-center items-center gap-2 mt-7">
                <button className="bg-green-500 px-2 py-1 text-xl text-white rounded-sm"><NavLink to={`/order/edit/${_id}`}>Edit</NavLink></button>
                <button onClick={() => handleOrderDelete(_id)} className="bg-red-500 px-2 py-1 text-xl text-white rounded-sm">Delete</button>
            </div>
        </div>
    </>
}

export default Order_card