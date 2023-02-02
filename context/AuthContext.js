import React, { useContext, createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";

export const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [userData, setUser] = useState({});
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      console.log(userLoggedIn);
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  //!! check if is truthy
  useEffect(() => {
    setUserLoggedIn(userData && !!Object.keys(userData).length);
  }, [userData]);

  return (
    <UserContext.Provider
      value={{ createUser, signIn, logOut, userData, userLoggedIn }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
/* 
const logout=()=>{
  return signOut(auth)
}

const handleLogout= async()=>{
  try{
    await logout()
  }catch(error){
    console.log(error)
  }
}*/
