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
import AdminHome from "../pages/AdminDashboard/AdminHome";
import UserHome from "../pages/UserDashboard/UserHome";
import Payment from "../pages/Payment/Payment";
import BookingForm from "../pages/BookingForm/BookingForm";
import Review from "../pages/UserDashboard/Review";
import Users from "../pages/AdminDashboard/Users";
import MyCart from "../pages/UserDashboard/MyCart";
import Cart from "../pages/AdminDashboard/Cart";
import MyBooking from "../pages/UserDashboard/MyBooking";
import Booking from "../pages/AdminDashboard/Booking";
import AllPhotos from "../components/Gallery/AllPhotos";
import Blog from "../pages/Blog/Blog";
import BlogDetails from "../pages/Blog/BlogDetails";


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
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/blogDetails/:id",
                element: <BlogDetails></BlogDetails>,
                loader: () => fetch('/blog.json')
            },
            {
                path: "/bookingForm/:id",
                element: <BookingForm></BookingForm>
            },
            {
                path: "/payment",
                element: <Payment></Payment>
            },
            {
                path: "/allPhotos",
                element: <AllPhotos></AllPhotos>
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

            // admin dashboard
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
                path: "users",
                element: <Users></Users>
            },

            // user dashboard
            {
                path: "userHome",
                element: <UserHome></UserHome>
            },
            {
                path: "myBooking",
                element: <MyBooking></MyBooking>
            },
            {
                path: "myCart",
                element: <MyCart></MyCart>
            },
            {
                path: "review",
                element: <Review></Review>
            }

        ]
    }
]);

export default router;