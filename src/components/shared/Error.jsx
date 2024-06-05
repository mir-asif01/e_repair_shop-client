import { NavLink } from "react-router-dom";

function ErrorElement() {
    return <div className="flex justify-center items-center min-h-screen">
        <h1>404 not route not found <NavLink to="/">Go to <span className="text-red-500 font-semibold">Home</span></NavLink></h1>
    </div>
}

export default ErrorElement