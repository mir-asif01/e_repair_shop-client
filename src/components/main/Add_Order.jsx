import { useContext } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { AuthContext } from '../../context/AuthContext'
function Add_Order() {
    const { user } = useContext(AuthContext)
    const token = localStorage.getItem("token")
    const handleAddOrder = async (e) => {
        e.preventDefault()
        try {
            const form = e.target
            const orderName = form.orderName.value
            const orderDesc = form.orderDesc.value
            const productName = form.productName.value
            const order = {
                orderEmail: user?.email,
                orderName,
                orderDesc,
                productName
            }
            console.log(order);
            fetch(`https://e-repair-shop-server.vercel.app/add-order`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(order)
            }).then(res => res.json())
                .then(res => {
                    toast.success("Order added succesfully")
                    form.reset()
                })

        } catch (error) {
            toast.error(`${error.message}`)
        }
    }

    return <>
        <Toaster position='top-center' reverseOrder={false} toastOptions={{ duration: 40000 }}></Toaster>
        <div className="w-full my-10 max-w-md p-8 space-y-3 rounded-xl border bg-white   font-sans mx-auto">
            <h1 className="text-3xl font-bold text-center text-indigo-600">Add Your Order</h1>
            {/* Input fields and the form started */}
            <form onSubmit={handleAddOrder} className="space-y-6">
                <div className="space-y-2 text-sm">
                    <label htmlFor="order_name" className="block ">
                        Order Name
                    </label>
                    <input required type="text" name="orderName" id="username" placeholder="Order name" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  " />
                </div>
                <div className="space-y-2 text-sm">
                    <label htmlFor="description" className="block ">
                        Order Description
                    </label>
                    <input required type="text" name="orderDesc" id="password" placeholder="Order decription" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  " />
                </div>
                <div className="space-y-2 text-sm">
                    <label htmlFor="description" className="block ">
                        Product Name
                    </label>
                    <input required type="text" name="productName" id="password" placeholder="Product name" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  " />
                </div>
                <input type="submit" value="Place Order" className="text-lg rounded-xl p-[10px] block w-full bg-indigo-600 text-white border-y-4 cursor-pointer focus:border-indigo-500 z-50 group" />
                {/* Sign in Button */}
            </form>
        </div>
    </>
}

export default Add_Order