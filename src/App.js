// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FirebaseAppProvider } from 'reactfire';
import { firebaseConfig } from './firebase';
import { AuthProvider } from './contexts/AuthContext';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute'; // Import PrivateRoute
import HomePage from './components/HomePage'; // Import HomePage

const App = () => {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <AuthProvider>
        <Router>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<HomePage />} /> {/* Default HomePage route */}
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

export default App;
