import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function ProtectedRoute({ allowedRoles }) {
  const { user } = useAuth();

  if (!user) return <Navigate to="/" />;
  if (!allowedRoles.includes(user.role)) return <Navigate to="/unauthorized" />;

  return <Outlet />;
}

export default ProtectedRoute;
