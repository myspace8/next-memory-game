// userContext fetch and store user profile data in the React context
"use client"
import { createContext, useContext, useState, useEffect } from 'react';
import { db } from '../lib/firebaseClient';
import { doc, getDoc, setDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { useAuth } from './AuthContext';  // Assuming AuthContext is already set

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { user } = useAuth();
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (user) {
        const userDocRef = doc(db, 'users', user.uid);
        const userDocSnap = await getDoc(userDocRef);
        if (userDocSnap.exists()) {
          setUserProfile(userDocSnap.data());
        } else {
          // Create a new user profile if not existing
          const newUserProfile = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName || '',
            avatar: '',
            highScore: 0,
            preferences: {},
            gameProgress: { level: 1, experience: 0 }
          };
          await setDoc(userDocRef, newUserProfile);
          setUserProfile(newUserProfile);
        }
      }
      setLoading(false);
    };
    fetchUserProfile();
  }, [user]);

  const updateUserProfile = async (updatedProfile) => {
    if (user) {
      const userDocRef = doc(db, 'users', user.uid);
      await updateDoc(userDocRef, updatedProfile);
      setUserProfile((prev) => ({ ...prev, ...updatedProfile }));
    }
  };

  const deleteUserProfile = async () => {
    if (user) {
      const userDocRef = doc(db, 'users', user.uid);
      await deleteDoc(userDocRef);
      setUserProfile(null);
    }
  };

  return (
    <UserContext.Provider value={{ userProfile, updateUserProfile, deleteUserProfile, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
