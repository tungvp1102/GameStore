import { Outlet, Navigate } from "react-router-dom";

export const PrivateRoutes = () => {
  const token = {
    auth: false,
  };
  return localStorage ? <Outlet /> : <Navigate to="/log-in" replace />;
};
