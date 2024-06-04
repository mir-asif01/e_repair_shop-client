import { useEffect, useState } from "react"
import toast, { Toaster } from 'react-hot-toast'
import dummy from "../../assets/dummy.jpg"

function All_Users() {

    const [users, setUsers] = useState([])
    useEffect(() => {
        async function getAllUsers() {
            try {
                await fetch("http://localhost:3000/users")
                    .then(res => res.json())
                    .then(res => setUsers(res))
            } catch (error) {
                console.log(error);
            }
        }
        getAllUsers()
    }, [])
    console.log(users);
    return <>
        <div className="overflow-y-scroll ">
            <table className="sm:min-w-[90%] shadow-md  border mx-auto border-gray-100  my-6">
                <thead>
                    <tr className="bg-[#333333] text-white">
                        <th className="py-3 px-6 text-left border-b">Image</th>
                        <th className="py-3 px-6 text-left border-b">Name</th>
                        <th className="py-3 px-6 text-left border-b">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(u => <tr key={u._id} className="hover:bg-gray-50 transition duration-300">
                            <td className="py-4 px-6 border-b text-end">
                                <img src={u?.photoURL ? u?.photoURL : dummy} className="h-8 w-8 rounded" alt="" />
                            </td>
                            <td className="py-4 px-6 border-b">{u?.displayName}</td>
                            <td className="py-4 px-6 border-b">{u?.email}</td>

                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    </>
}

export default All_Users