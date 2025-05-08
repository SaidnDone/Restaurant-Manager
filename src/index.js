// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { FirebaseAppProvider } from 'reactfire';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { firebaseConfig } from './firebase';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Dashboard from './components/Dashboard'; // Import Dashboard component
import SignUp from './components/SignUp'; // Import SignUp component
import Login from './components/Login'; // Import Login component

// PrivateRoute to protect routes that require authentication
const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();
  if (!currentUser) {
    return <Navigate to="/login" />;  // Redirect to login if not authenticated
  }
  return children; // Render child components if authenticated
};

const App = () => {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <AuthProvider>
        <Router>
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />

            {/* Private Routes for Authenticated Users */}
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
          </Routes>
        </Router>
      </AuthProvider>
    </FirebaseAppProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
