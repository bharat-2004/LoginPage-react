import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Admin from './pages/Admin';
import Manager from './pages/Manager';
import User from './pages/User';
import Unauthorized from './pages/Unauthorized';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/unauthorized" element={<Unauthorized />} />

      <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
        <Route path="/admin" element={<Admin />} />
      </Route>

      <Route element={<ProtectedRoute allowedRoles={['manager']} />}>
        <Route path="/manager" element={<Manager />} />
      </Route>

      <Route element={<ProtectedRoute allowedRoles={['user']} />}>
        <Route path="/user" element={<User />} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
