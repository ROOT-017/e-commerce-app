import React, { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRoutePropsTypes {
  children: React.ReactNode;
  path: string;
}

const ProtectedRoute: FC<ProtectedRoutePropsTypes> = ({ children, path }) => {
  const isLoggedIn = true;
  if (!isLoggedIn) {
    return <Navigate to="/auth/signin" />;
  }

  return <>{children ? children : <Outlet />}</>;
};

export default ProtectedRoute;
