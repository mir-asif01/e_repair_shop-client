import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"

function Profile() {
    const { user } = useContext(AuthContext)
    return <>
        <h1>Hello {user?.email}</h1>
    </>
}

export default Profile