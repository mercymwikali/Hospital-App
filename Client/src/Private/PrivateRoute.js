import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { jwtDecode } from 'jwt-decode';
import { Roles } from '../utils/role';  // Import the roles

const PrivateRoute = ({ allowedRoles }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  if (!userInfo) {
    return <Navigate to="/" />;  // If not logged in, redirect to the home page
  }

  try {
    const decoded = jwtDecode(userInfo.accessToken);
    const userRoles = decoded.user?.role;

    // Check if the user's role is in the allowedRoles list
    if (allowedRoles.includes(userRoles)) {
      return <Outlet />;  // Render the child components if allowed
    } else {
      return <Navigate to="/" />;  // Redirect if user doesn't have the proper role
    }
  } catch (error) {
    console.error("Failed to decode token:", error);
    return <Navigate to="/" />;  // Redirect in case of error
  }
};

export default PrivateRoute;
