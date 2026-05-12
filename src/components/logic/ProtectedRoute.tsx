import React from "react";
import { useUserStore } from "../../redux/store/userStore";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }: Props) {
  const isUserLoggedIn = useUserStore((state: any) => state.isUserLoggedIn);
  return isUserLoggedIn ? children : <Navigate to="/welcome" />;
}

export default ProtectedRoute;

interface Props {
  children: React.ReactElement;
}
