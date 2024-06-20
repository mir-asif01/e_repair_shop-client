import { useLoaderData } from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast'

function Edit_order() {
    const order = useLoaderData()
    const { _id, orderEmail, orderName, orderDesc, productName } = order;
    const token = localStorage.getItem('token')
    const handleUpdate = async (e) => {
        e.preventDefault()
        const form = e.target
        try {
            const updatedOrderName = form.order_name.value
            const updatedOrderDesc = form.order_desc.value

            const updatedInfo = {
                orderName: updatedOrderName ? updatedOrderName : orderName,
                orderDesc: updatedOrderDesc ? updatedOrderDesc : orderDesc
            }

            await fetch(`https://e-repair-shop-server.vercel.app/order/edit/${_id}`, {
                method: "PATCH",
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${token}`
                },
                body: JSON.stringify(updatedInfo)
            }).then(res => res.json())
                .then(res => {
                    toast.success("Updated Order successfully")
                    form.reset()
                })
        } catch (error) {
            console.log(error);
        }
    }
    return <>
        <h1 className="text-5xl font-semibold text-slate-600 text-center my-10">Edit your order__</h1>
        <Toaster position='top-center' reverseOrder={false} toastOptions={{ duration: 40000 }}></Toaster>
        <section className="flex justify-center items-center ">

            <div className="w-full sm:w-1/2 mb-8 sm:mb-0">
                {/* Left side form */}
                <form onSubmit={handleUpdate}>
                    <div className="flex flex-col space-y-4 mb-4">
                        <input className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none" name="order_name" placeholder="Order name" type="text" />
                        <input className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none" readOnly defaultValue={orderEmail} name="order_email" placeholder="Order Email" type="text" />
                        <input className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none" readOnly defaultValue={productName} name="product_name" placeholder="Product Name" type="text" />
                        <input className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none" name="order_desc" placeholder="Order description" type="text" />
                        <input type="submit" value="Update" className="inline-flex items-center justify-center rounded-md text-sm font-medium  h-10 px-4 py-2 w-full bg-red-600 text-white cursor-pointer" />
                    </div>
                </form>
            </div>
        </section>
    </>
}

export default Edit_order