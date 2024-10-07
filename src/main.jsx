import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import Login from "./components/Login";
import Register from "./components/Register";
import AuthProvider from "./Provider/AuthProvider";
import PrivateRoute from "./routes/PrivateRoute";
import Profile from "./components/Profile";
import Home from "./components/Home/Home";
import ErrorPage from "./ErrorPage/ErrorPage";
import Pcbuilder from "./components/Pages/Pcbuilder";
import Serviceing from "./components/Pages/serviceing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
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
        path:"/profile",
        element:<PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path:"/pc-builder",
        element:<PrivateRoute><Pcbuilder></Pcbuilder></PrivateRoute>
      },
      {
        path:"/serviceing",
        element:<PrivateRoute><Serviceing></Serviceing></PrivateRoute>
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
