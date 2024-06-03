import { Outlet } from "react-router-dom"

function DashboardLayout() {

    return <>
        <h1>This is dashboard layout</h1>
        <h1>Dashboard navigation bar</h1>
        <Outlet></Outlet>
    </>
}

export default DashboardLayout