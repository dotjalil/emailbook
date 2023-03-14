import { useAuth } from "../context/Auth";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const AuthRoute = () => {
  const { auth } = useAuth();
  const location = useLocation();

  return auth ? (
    <Outlet />
  ) : (
    <Navigate to={"/register"} replace state={{ path: location.pathname }} />
  );
};

export default AuthRoute;