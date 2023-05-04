import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from "./Layouts/Main";
import Chefs from "./Pages/Shared/chefs/Chefs";
import LoginLayout from "./Layouts/LoginLayout";
import Register from "./Pages/Register/Register";
import AuthProviders from "./Providers/AuthProviders";
import PrivetRoute from "./PrivetRoute/PrivetRoute";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import ChefDetails from "./Pages/chefDetails/ChefDetails";
import Blog from "./Pages/Blog/Blog";


const router = createBrowserRouter([

  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage> ,
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
        path: 'blog',
        element: <Blog></Blog>
      },
      
      {
        path: '/',
        element: <Chefs></Chefs>
      } ,
      {
        path: '/details/:id' ,
        element: <PrivetRoute><ChefDetails></ChefDetails></PrivetRoute> ,
        loader: ({params}) => fetch (`https://fastest-food-service-server-bishawnath07.vercel.app/chefs/${params.id}`)
      }
    ]
  },
  



]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders><RouterProvider router={router} /></AuthProviders>
  </React.StrictMode>
);