import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import AppLayout from "../layouts/App";
import AuthLayout from "../layouts/Auth";
import { authSelector } from "../store/authSlice";

function RequireAuth() {
  const { token } = useSelector(authSelector);

  if (!token) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}

function NotLoggedIn() {
  const { token } = useSelector(authSelector);

  if (token) {
    return <Navigate to="dashboard" />;
  }

  return <Outlet />;
}

function AppRoutes() {
  return (
    <Routes>
      <Route element={<NotLoggedIn />}>
        <Route exact path="/" element={<AuthLayout />} />
      </Route>
      <Route element={<RequireAuth />}>
        <Route path="*" element={<AppLayout />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
