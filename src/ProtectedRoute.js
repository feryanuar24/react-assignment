import { useSearchParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [searchParams] = useSearchParams();
  const password = searchParams.get("password");
  if (password !== "secret") {
    return <Navigate to="/unauthorized" />;
  }
  return children;
};

export default ProtectedRoute;
