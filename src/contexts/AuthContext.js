// src/contexts/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../firebase'; // Firebase authentication import
import { onAuthStateChanged } from 'firebase/auth'; // Firebase auth listener

// Create a context
const AuthContext = createContext();

// Custom hook to access AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

// AuthProvider component to wrap the app and provide context
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    // Clean up the subscription when component unmounts
    return unsubscribe;
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Optional: Show loading indicator while fetching auth state
  }

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
