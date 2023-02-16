import React, { useContext, createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";

type UserContextProps ={
  createUser: (email: string, password: string) => void;
  signIn: (email: string, password: string) => void;
  logOut: () => void;
  userData: any;
  userLoggedIn: boolean;
}
type CurrentUser = Record<string, unknown>;

const defaultValue: UserContextProps = {
  createUser: () => {},
  signIn: () => {},
  logOut: () => {},
  userData: {},
  userLoggedIn: false,
};

export const UserContext = createContext<UserContextProps | null>(defaultValue);

export const AuthContextProvider = ({ children }: { children: any }) => {
  const [userData, setUser] = useState<CurrentUser | null>(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const createUser = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser:CurrentUser) => {
      console.log(currentUser);
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
      value={ createUser, signIn, logOut, userData, userLoggedIn }
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
