import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import LandingPage from './components/LandingPage';
import ErrorPage from './components/ErrorPage';
import Profile from './components/Profile';
import ProtectedRoute from './auth/ProtectedRoute';
import Loading from './components/Loading';

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<ErrorPage status="404" message="Not Found" />} />
        <ProtectedRoute path="/dashboard" element={<Dashboard />} />
        <ProtectedRoute path="/profile" component={Profile} />
      </Routes>
    </div>
  );
}

export default App;
