import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Cow from "../pages/Cow/Cow";
import Goat from "../pages/Goat/Goat";
import Shop from "../pages/Shop/Shop";
import Dashboard from "../pages/Dashboard/Dashboard";
import AdminHome from "../pages/Dashboard/AdminHome";
import UserHome from "../pages/Dashboard/UserHome";
import AllUsers from "../pages/Dashboard/AllUsers";
import Payment from "../pages/Payment/Payment";
import BookingForm from "../pages/BookingForm/BookingForm";
import Booking from "../pages/Dashboard/Booking";
import Cart from "../pages/Cart/Cart";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/cow",
                element: <Cow></Cow>
            },
            {
                path: "/goat",
                element: <Goat></Goat>
            },
            {
                path: "/shop",
                element: <Shop></Shop>
            },
            {
                path: "/bookingForm/:id",
                element: <BookingForm></BookingForm>
            },
            {
                path: "/payment",
                element: <Payment></Payment>
            }
        ],
    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/register",
        element: <Register></Register>
    },
    {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        children: [

            // user dashboard
            {
                path: "adminHome",
                element: <AdminHome></AdminHome>
            },
            {
                path: "booking",
                element: <Booking></Booking>
            },
            {
                path: "cart",
                element: <Cart></Cart>
            },
            {
                path: "allUsers",
                element: <AllUsers></AllUsers>
            },

            // admin dashboard
            {
                path: "userHome",
                element: <UserHome></UserHome>
            }

        ]
    }
]);

export default router;