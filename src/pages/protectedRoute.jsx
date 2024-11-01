import { useAuth } from "../utils/auth";
// import Login from "./login";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const auth = useAuth();
  if (localStorage.getItem("Username") || auth.user) return children;
  return <Navigate to="/login" replace="true" />;
};
