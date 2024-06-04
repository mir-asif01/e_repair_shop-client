import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

function PrivateRoute({ children }) {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    if (!user?.email) {
        return navigate("/login")
    } else {
        return children
    }
}

export default PrivateRoute