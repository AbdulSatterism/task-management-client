import MyTasks from "../MyTasks/MyTasks";
import AbdulSatter from "../pages/AssignTo/AbdulSatter";
import Karim from "../pages/AssignTo/Karim";
import Rahim from "../pages/AssignTo/Rahim";
import Home from "../pages/Home/Home/Home";
import PendingTasks from "../pages/PendingTasks/PendingTasks";
import Login from "../pages/Shared/Login/Login";
import Signup from "../pages/Shared/Signup/Signup";
import SolvedTasks from "../pages/SolvedTasks/SolvedTasks";
import PrivateRoute from "./PrivateRoute";

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
                path: '/my-task',
                element: <PrivateRoute> <MyTasks></MyTasks></PrivateRoute>
            },
            {
                path: '/pending-task',
                element: <PendingTasks></PendingTasks>
            },
            {
                path: '/solved-task',
                element: <SolvedTasks></SolvedTasks>
            },
            {
                path: '/rahim',
                element: <Rahim></Rahim>
            },
            {
                path: '/karim',
                element: <Karim></Karim>
            },
            {
                path: '/abdul-satter',
                element: <AbdulSatter></AbdulSatter>
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