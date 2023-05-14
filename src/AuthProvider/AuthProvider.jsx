import React, { createContext, useEffect, useState } from 'react';
export const authContext = createContext()
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import app from '../firebase/firebase.config';
const AuthProvider = ({ children }) => {
  const auth = getAuth(app)
  const [user, setUser] = useState([])
  const [loading, setLoading] = useState(true)



  //monitor user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
    });
    return () => {
      return unsubscribe();
    }
  }, [])


  //create user 
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  //singin 
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = () => {
    return signOut(auth)

  }
  const authInfo = {
    user,
    loading,
    auth,
    createUser,
    signIn,
    setLoading,
    logOut,
  }
  return (
    <authContext.Provider value={authInfo}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;