import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from "./Layouts/Main";
import Chefs from "./Pages/Shared/chefs/Chefs";
import ChefDetails from "./Pages/chefDetails/chefDetails";
import Login from "./Pages/Login/Login";
import LoginLayout from "./Layouts/LoginLayout";
import Register from "./Pages/Register/Register";
import AuthProviders from "./Providers/AuthProviders";
import PrivetRoute from "./PrivetRoute/PrivetRoute";


const router = createBrowserRouter([

  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path:'/login' ,
        element: <LoginLayout></LoginLayout>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      
      {
        path: '/',
        element: <Chefs></Chefs>
      } ,
      {
        path: '/details/:id' ,
        element: <PrivetRoute><ChefDetails></ChefDetails></PrivetRoute> ,
        loader: ({params}) => fetch (`http://localhost:3000/chefs/${params.id}`)
      }
    ]
  },
  



]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders><RouterProvider router={router} /></AuthProviders>
  </React.StrictMode>
);