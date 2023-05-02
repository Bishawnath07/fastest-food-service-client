import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const {user , loading} = useContext(AuthContext)
    const location = useLocation();

    if(loading){
        return  <div className="flex justify-center items-center h-screen">
        <div className="relative w-20 h-20">
          <div className="absolute top-0 right-0 bottom-0 left-0 rounded-full border-t-4 border-b-4 border-gray-900"></div>
          <div className="absolute top-0 right-0 bottom-0 left-0 rounded-full border-t-4 border-b-4 border-gray-300 animate-spin"></div>
          <div className="absolute top-0 right-0 bottom-0 left-0 rounded-full border-t-4 border-b-4 border-gray-600 animate-pulse"></div>
        </div>
      </div>
    }

    if(user){
        return children;
    }
    return <Navigate to= "/login" state={{from: location}} replace></Navigate>;
};

export default PrivetRoute;