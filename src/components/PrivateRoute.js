// src/components/PrivateRoute.js
import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; // Use the useAuth hook

const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth(); // Use the currentUser from useAuth hook
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (currentUser !== undefined) {
      setLoading(false);
    }
  }, [currentUser]);

  if (loading) {
    return <div>Loading...</div>; // Show loading state until we know the user status
  }

  // If user is logged in, render the children (protected content)
  // Otherwise, redirect to the login page
  return currentUser ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
