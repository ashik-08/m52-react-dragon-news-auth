import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import News from "../pages/News/News";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
    {
        path:"/",
        element: <Home></Home>,
        loader: () => fetch('./news.json')
    },
    {
        path: "/news/:id",
        element: <PrivateRoute><News></News></PrivateRoute>,
        loader: () => fetch('../../public/news.json')
    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/register",
        element: <Register></Register>
    }
],
  },
]);

export default routes;