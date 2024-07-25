import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/AuthContext";

export function Protected({ children }) {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Navigate to="/signin" replace />;
  } else {
    return children;
  }
}
