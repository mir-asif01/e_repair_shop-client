import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import DashboardLayout from "../layout/DashboardLayout";
import Register from "../components/shared/Register";
import Login from "../components/shared/Login";
import All_Services from "../components/dashboard/All_Services";
import All_Orders from "../components/dashboard/All_Orders";
import All_Users from "../components/dashboard/All_Users";
import Home from "../components/main/Home";
import Dashboard_Home from "../components/dashboard/Dashboard_Home";


const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/login",
                element: <Login></Login>
            }

        ]
    },
    {
        path: "dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: "dashboard",
                element: <Dashboard_Home></Dashboard_Home>
            },
            {
                path: "all-services",
                element: <All_Services></All_Services>
            },
            {
                path: "all-orders",
                element: <All_Orders></All_Orders>
            },
            {
                path: "all-users",
                element: <All_Users></All_Users>
            }
        ]
    }
])

export default routes