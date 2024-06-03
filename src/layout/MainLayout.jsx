import { Outlet } from "react-router-dom"

function MainLayout() {
    return <>
        <h1>This main layout</h1>
        <h1>navigation bar</h1>
        <Outlet></Outlet>
    </>
}

export default MainLayout