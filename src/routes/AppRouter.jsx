import { createBrowserRouter } from "react-router-dom";
import Root from "../components/layouts/Root";
import Home from "../components/pages/home/Home";
import Login from "../components/pages/auth/Login";
import SignUp from "../components/pages/auth/SignUp";
import PrivetRoute from "./PrivetRoute";
import Services from "../components/pages/services/Services";
import Blog from "../components/pages/blogs/Blog";
import Contact from "../components/pages/contact/Contact";
import DetailsServiceCard from "../components/pages/services/DetailsServiceCard";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: (
          <PrivetRoute>
            <Services></Services>
          </PrivetRoute>
        ),
        loader: () => fetch("/services.json"),
      },
      {
        path: "/services/:id",
        element: (
          <PrivetRoute>
            <DetailsServiceCard></DetailsServiceCard>
          </PrivetRoute>
        ),
        loader: () => fetch("/services.json"),
      },
      {
        path: "/blogs",
        element: (
          <PrivetRoute>
            <Blog></Blog>
          </PrivetRoute>
        ),
      },
      {
        path: "/contact",
        element: (
          <PrivetRoute>
            <Contact></Contact>
          </PrivetRoute>
        ),
      },
      {
        path: "/signin",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

export default AppRouter;
