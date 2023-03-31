import React, { lazy } from 'react'
import { Outlet } from "react-router-dom";
import { LOGIN,SIGN_UP } from '../constants/routePathConstant';

const Login = lazy(() => import("../../Pages/user/auth/Login"));
const SignUp = lazy(() => import("../../Pages/user/auth/SignUp"));
const Home = lazy(() => import("../../Pages/user/Home/index"));

const guestRoutes = [
    {
        path: "/",
        element: (
            <div>
                <Outlet />
            </div>
        ),
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: LOGIN,
                element: <Login />,
            },
            {
                path: SIGN_UP,
                element: <SignUp />,
            },
            {
                path: '/user',
                element:(
                    <div>
                        <Outlet/>
                    </div>
                ),
                children : [
                    {
                        index : true,
                        element: <h1>I'm User</h1>
                    },
                    {
                        path : ':id',
                        element : <h1>I'm User Profile</h1>
                    }
                ]
            },
            {
                path: "*",
                element: <h1>404</h1>,
            },
        ],
    },
];

export default guestRoutes;