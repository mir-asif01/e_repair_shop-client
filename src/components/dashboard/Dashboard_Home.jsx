import { NavLink } from "react-router-dom"

function Dashboard_Home() {
    return <>
        <section className="flex justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-center items-center">
                <div className="border border-gray-200 p-3 md:p-16 rounded-md hover:shadow-md">
                    <h1 className="text-3xl text-center p-5 border border-gray-600 ">{10}+ </h1>
                    <p className="text-slate-700 text-center my-2 font-bold">Active Users__</p>
                </div>
                <div className="border border-gray-200 p-3 md:p-16 rounded-md hover:shadow-md">
                    <h1 className="text-3xl text-center p-5 border border-gray-600 ">{20}+ </h1>
                    <p className="text-slate-700 text-center my-2 font-bold">Orders Running__</p>
                </div>
                <div className="border border-gray-200 p-3 md:p-16 rounded-md hover:shadow-md">
                    <h1 className="text-3xl text-center p-5 border border-gray-600 ">{100}+ </h1>
                    <p className="text-slate-700 text-center my-2 font-bold">Orders Cmpleted__</p>
                </div>
            </div>
        </section>
    </>
}
export default Dashboard_Home