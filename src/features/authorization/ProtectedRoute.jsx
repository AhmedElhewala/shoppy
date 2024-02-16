import { useSelector } from "react-redux";
import { getUser } from "../authentication/userSlice";
import  { Navigate } from 'react-router-dom';
import Unauthorized from "./Unauthorized";

function ProtectedRoute({children, authorizeRole}) {
  const user = useSelector(getUser);

  return (
    user ? (
      authorizeRole.includes(user?.role) ?
      (children) :
      (<Unauthorized />)
    ) : <Navigate to="/auth/login" />
  )
}

export default ProtectedRoute