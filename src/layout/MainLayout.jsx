import { Outlet } from "react-router-dom"
import Navbar from "../components/shared/Navbar"
import Footer from "../components/shared/Footer"

function MainLayout() {
    return <>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </>
}

export default MainLayout