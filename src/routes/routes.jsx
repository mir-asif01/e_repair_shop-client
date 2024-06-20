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
import Add_Order from "../components/main/Add_Order";
import Add_Feedback from "../components/main/Add_Feedback";
import Profile from "../components/main/Profile";
import PrivateRoute from "./PrivateRoute";
import Edit_profile from "../components/main/profile_components/Edit_profile";
import Edit_order from "../components/main/order/Edit_order";
import ErrorElement from "../components/shared/Error";


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
            },
            {
                path: "/add-order",
                element: <PrivateRoute><Add_Order></Add_Order></PrivateRoute>
            },
            {
                path: "/add-feedback",
                element: <PrivateRoute><Add_Feedback></Add_Feedback></PrivateRoute>
            },
            {
                path: "/profile",
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: "/profile/edit/:id",
                element: <PrivateRoute><Edit_profile></Edit_profile></PrivateRoute>,
                loader: ({ params }) => fetch(`https://e-repair-shop-server.vercel.app/users/${params.id}`)
            },
            {
                path: "/order/edit/:id",
                element: <PrivateRoute><Edit_order></Edit_order></PrivateRoute>,
                loader: ({ params }) => fetch(`https://e-repair-shop-server.vercel.app/order/${params?.id}`)
            },
            {
                path: "*",
                element: <ErrorElement></ErrorElement>
            }

        ]
    },
    {
        path: "dashboard",
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/dashboard",
                element: <All_Orders></All_Orders>
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
            },
            {
                path: "*",
                element: <ErrorElement></ErrorElement>
            }

        ]
    }
])

export default routes