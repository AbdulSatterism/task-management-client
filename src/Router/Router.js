import Home from "../pages/Home/Home/Home";
import Login from "../pages/Shared/Login/Login";
import Signup from "../pages/Shared/Signup/Signup";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
]);

export default router;