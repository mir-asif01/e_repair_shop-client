function Care() {
    return <>

        <div className="min-h-[600px] sm:px-2 px-3 mx-3 max-h-[800px] py-20 rounded-t-2xl bg-[#2A3342]">
            <div className="flex justify-center flex-col">
                {/* Beautiful announcement line */}

                <h1 className="text-4xl text-center text-gray-100">We look to provide best we have__</h1>
                {/* Banner Content */}
                <div className="mt-10 ">
                    <h2 className="text-white lg:text-5xl md:text-4xl sm:text-3xl text-2xl max-w-[600px] mx-auto text-center font-extrabold ">
                        A small business is only as good as its tools.
                    </h2>
                    <p className="lg:text-xl md:text-lg text-[#8896AB] mt-5 max-w-[600px] text-center mx-auto text-sm">
                        We’re different. Flex is the only saas business platform that lets
                        you run your business on one platform, seamlessly across all digital
                        channels.
                    </p>
                    {/* Banner action  */}
                    <div className="mt-5 flex md:flex-row max-w-[450px] mx-auto justify-center gap-2 flex-col">
                        <div className="md:ml-auto md:mr-0 lg:w-[55%] relative">
                            <svg className="absolute mt-[10px] ml-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 3.38 8.06 7.75 8.94.57.11.78-.25.78-.55v-3.06c0-.31-.22-.59-.53-.64C5.61 16.31 4 14.29 4 12c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6c-.34 0-.67-.04-1-.09-.31-.05-.54-.33-.54-.64v-3.07c0-.3-.21-.66.57-.59 3.43.65 6.18 3.25 6.18 6.49v.5c0 .41.34.75.75.75s.75-.34.75-.75v-.5c0-4.57-3.61-8.25-8-8.75z" /></svg>
                            <input placeholder="Enter your email" className="pr-3 pl-8 rounded-lg w-full  py-3" type="text" name="" id="" />
                        </div>
                        <div className=" md:mr-auto md:ml-0 lg:w-[45%] ">
                            <button className="bg-[#22C55E] sm:py-3 py-2 sm:text-base text-sm px-18 text-white rounded-lg h-full w-full ">Share your problem</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </>
}

export default Care