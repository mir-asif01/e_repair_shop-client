function Add_Feedback() {
    return <>
        <div className="w-full my-10 max-w-md p-8 space-y-3 rounded-xl border bg-white   font-sans mx-auto">
            <h1 className="text-3xl font-bold text-center text-indigo-600">Give Feedback</h1>
            {/* Input fields and the form started */}
            <form action="" className="space-y-6">
                <div className="space-y-2 text-sm">
                    <label htmlFor="order_name" className="block ">
                        Your Name
                    </label>
                    <input type="text" name="order_name" id="username" placeholder="Name" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  " />
                </div>
                <div className="space-y-2 text-sm">
                    <label htmlFor="description" className="block ">
                        Your Email
                    </label>
                    <input type="password" name="description" id="password" placeholder="Email" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  " />
                </div>
                <div className="space-y-2 text-sm">
                    <label htmlFor="description" className="block ">
                        Your Comment
                    </label>
                    <input type="password" name="description" id="password" placeholder="Comment" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  " />
                </div>
                {/* Sign in Button */}
                <button className="text-lg rounded-xl relative p-[10px] block w-full bg-indigo-600 text-white border-y-4 duration-500 overflow-hidden focus:border-indigo-500 z-50 group">
                    Add Feedback
                    <span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-1000 ease-out flex justify-center inset-0 items-center z-10 text-white">
                        Let&apos;s go
                    </span>
                    <span className="bg-indigo-800 absolute inset-0 -translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
                    <span className="bg-indigo-800 absolute inset-0 translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
                    <span className="bg-indigo-800 absolute inset-0 translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
                    <span className="bg-indigo-800 absolute inset-0 -translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
                </button>
            </form>
        </div>
    </>
}

export default Add_Feedback