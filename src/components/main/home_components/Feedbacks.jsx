import { useEffect, useState } from "react"
import dummy from "../../../assets/dummy.jpg"

function FeedbackCard({ fd }) {
    const { userName, userEmail, comment, photoURL } = fd
    return <>
        <div className=" flex flex-col justify-center items-center gap-2 border border-gray-100 p-10 rounded-md hover:shadow-lg">
            <img className="w-24 h-24 rounded" src={photoURL ? photoURL : dummy} alt="" />
            <h1>{userEmail}</h1>
            <h1>{userName}</h1>
            <p>{comment}</p>
        </div>
    </>
}

function Feedbacks() {
    const [feedbacks, setFeedbacks] = useState([])
    useEffect(() => {
        const getAllFeedbacks = async () => {
            await fetch("https://e-repair-shop-server.vercel.app/feedbacks")
                .then(res => res.json())
                .then(res => setFeedbacks(res))
        }
        getAllFeedbacks()
    }, [])
    return <>
        <section className="w-full py-12 md:py-24 flex justify-center bg-white flex-col lg:py-32 bg-gradient-to-b from-#52C2FF to-white">
            <h1 className="text-5xl text-slate-800 text-center mb-20">Feedbacks From Recent Clients__</h1>
            <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
                {
                    feedbacks.slice(0, 3).reverse().map((fd) => <FeedbackCard key={fd._id} fd={fd}></FeedbackCard>)
                }
            </div>
        </section>
    </>
}

export default Feedbacks