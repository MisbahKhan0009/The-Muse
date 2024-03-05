import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import NotFound from "../Components/NotFound/NotFound";
import Home from "../Components/Homepage/Home/Home";
import Contact from "../Components/Contact/Contact";
import Signin from "../Components/SigninSignup/Signin";
import Signup from "../Components/SigninSignup/Signup";
import Rooms from "../Components/Rooms/Rooms";
import PrivateRoute from "./PrivateRoutes";
import Booking from "../Components/Booking/Booking";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/rooms",
        element: <Rooms />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/booking",
        element: (
          <PrivateRoute>
            <Booking />
          </PrivateRoute>
        ),
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
