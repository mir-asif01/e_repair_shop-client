import { useLoaderData } from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast'

function Edit_profile() {
    const user = useLoaderData()
    const token = localStorage.getItem("token")

    const { email, displayName, photoURL } = user

    const handleUpdate = async (e) => {
        e.preventDefault()
        try {
            const updatedName = e.target.name.value
            const updatedPhotoURL = e.target.photoURL.value

            const updatedInfo = {
                displayName: updatedName ? updatedName : displayName,
                photoURL: updatedPhotoURL ? updatedPhotoURL : photoURL
            }

            await fetch(`http://localhost:3000/users/${email}`, {
                method: "PATCH",
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${token}`
                },
                body: JSON.stringify(updatedInfo)
            }).then(res => res.json())
                .then(res => {
                    toast.success("Updated Profile")
                    e.target.reset()
                })
        } catch (error) {
            console.log(error);
        }
    }

    return <>
        <h1 className="text-5xl font-semibold text-slate-600 text-center my-10">Edit your profile__</h1>
        <Toaster position='top-center' reverseOrder={false} toastOptions={{ duration: 40000 }}></Toaster>
        <section className="flex justify-center items-center ">

            <div className="w-full sm:w-1/2 mb-8 sm:mb-0">
                {/* Left side form */}
                <form onSubmit={handleUpdate}>
                    <div className="flex flex-col space-y-4 mb-4">
                        <input className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none" name="name" placeholder="Username" type="text" />
                        <input className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none" defaultValue={email} name="email" placeholder="Email" type="text" />
                        <input className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none" name="photoURL" placeholder="Photo Url" type="text" />
                        <input type="submit" value="Update" className="inline-flex items-center justify-center rounded-md text-sm font-medium  h-10 px-4 py-2 w-full bg-red-600 text-white cursor-pointer" />
                    </div>
                </form>
            </div>
        </section>
    </>
}

export default Edit_profile