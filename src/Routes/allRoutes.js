import React from "react";
import { Redirect } from "react-router-dom";
import Login from "../pages/Authentication/Login";
import ForgetPasswordPage from "../pages/Authentication/ForgetPassword";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";


const authProtectedRoutes = [{
      path: "/",
      exact: true,
      component: () => <Redirect to="/dashboard" />,
  }
];

const publicRoutes = [
    // { path: "/logout", component: Logout },
    { path: "/login", component: Login },
    // { path: "/", component: <></> }
    // { path: "/forgot-password", component: ForgetPasswordPage },
    // { path: "/register", component: Register },
]

export { authProtectedRoutes, publicRoutes };