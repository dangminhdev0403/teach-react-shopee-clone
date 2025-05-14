import { useAuth } from "@context/auth/AuthContext";
import { Navigate, Outlet } from "react-router";

const RejectRoute = () => {
  const { isAuthenticated } = useAuth();

  return !isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default RejectRoute;
