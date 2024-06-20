import { useEffect, useState } from "react"
import toast, { Toaster } from 'react-hot-toast'

function All_Orders() {
    const [orders, setOrders] = useState([])
    const [name, setName] = useState()
    useEffect(() => {
        async function getAllOrders() {
            try {
                await fetch("https://e-repair-shop-server.vercel.app/orders")
                    .then(res => res.json())
                    .then(res => setOrders(res))
            } catch (error) {
                console.log(error);
            }
        }
        getAllOrders()
    }, [])
    const token = localStorage.getItem("token")
    const handleDelete = async (id) => {
        setOrders(orders.filter(od => od._id !== id))
        try {
            setOrders(orders.filter(od => od._id !== id))
            await fetch(`https://e-repair-shop-server.vercel.app/delete-order/${id}`, {
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

    const handleSearch = () => {
        if (!name) return
        setOrders(orders.filter(od => od?.orderName === name))
    }
    console.log(orders);
    return <>
        <Toaster position='top-center' reverseOrder={false} toastOptions={{ duration: 40000 }}></Toaster>
        <div className="overflow-x-auto ">
            <div className="relative w-max rounded-lg">
                <input onChange={(e) => {
                    e.preventDefault()
                    setName(e.target.value)
                }} className="peer rounded-lg border border-gray-400 bg-transparent px-4 py-2  focus:outline-none" type="text" placeholder="Search by order name__" />
                <button onClick={handleSearch} className="bg-green-500 px-5 py-2 mx-1 rounded-md text-white">Search</button>
            </div>
            <table className="min-w-[90%] shadow-md  border mx-auto border-gray-100  my-6">
                <thead>
                    <tr className="bg-[#333333] text-white">
                        <th className="py-3 px-6 text-left border-b">Name</th>
                        <th className="py-3 px-6 text-left border-b">Email</th>
                        <th className="py-3 px-6  border-b text-end"></th>
                        <th className="py-3 px-6  border-b text-end"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.length === 0 ? <><h1 className="text-red-500">No results found</h1></>
                            : orders.map(od => <tr key={od._id} className="hover:bg-gray-50 transition duration-300">
                                <td className="py-4 px-6 border-b">{od?.orderName}</td>
                                <td className="py-4 px-6 border-b">{od?.orderEmail}</td>
                                <td className="py-4 px-6 border-b text-end">
                                    <button className="bg-red-500 px-2 py-1 rounded-md text-white" onClick={() => handleDelete(od?._id)}>Delete</button>
                                </td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>

    </>
}

export default All_Orders