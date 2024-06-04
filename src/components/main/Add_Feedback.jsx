import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from "react-router-dom"

function Add_Feedback() {

    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    const addFeedbackHandler = async (e) => {
        e.preventDefault()
        try {
            const form = e.target
            const userName = form.userName.value
            const userEmail = form.email.value
            const comment = form.comment.value

            const feedback = {
                userName,
                photoURL: user?.photoURL ? user?.photoURL : "",
                userEmail,
                comment
            }
            await fetch("http://localhost:3000/add-feedback", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(feedback)
            }).then(res => res.json())
                .then(res => {
                    toast.success("Feedback added succesfully")
                    form.reset()
                    navigate("/")
                })


            console.log(feedback);
        } catch (error) {
            console.log(error);
        }
    }

    return <>
        <Toaster position='top-center' reverseOrder={false} toastOptions={{ duration: 40000 }}></Toaster>
        <div className="w-full my-10 max-w-md p-8 space-y-3 rounded-xl border bg-white   font-sans mx-auto">
            <h1 className="text-3xl font-bold text-center text-indigo-600">Give Feedback</h1>
            {/* Input fields and the form started */}
            <form onSubmit={addFeedbackHandler} className="space-y-6">
                <div className="space-y-2 text-sm">
                    <label htmlFor="order_name" className="block ">
                        Your Name
                    </label>
                    <input required type="text" name="userName" id="username" placeholder="" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  " />
                </div>
                <div className="space-y-2 text-sm">
                    <label htmlFor="description" className="block ">
                        Your Email
                    </label>
                    <input type="text" readOnly defaultValue={user?.email ? user?.email : ""} name="email" id="password" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  " />
                </div>
                <div className="space-y-2 text-sm">
                    <label htmlFor="description" className="block ">
                        Your Comment
                    </label>
                    <input required type="text" name="comment" id="password" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  " />
                </div>
                <input type="submit" value="Add Feedback" className="text-lg rounded-xl p-[10px] block w-full bg-indigo-600 text-white border-y-4 cursor-pointer focus:border-indigo-500" />
            </form>
        </div>
    </>
}

export default Add_Feedback