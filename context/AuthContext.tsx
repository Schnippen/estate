import React, { useContext, createContext, useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";

type UserContextProps = {
  createUser: (email: string, password: string) => void;
  signIn: (email: string, password: string) => void;
  logOut: () => void;
  userData: any;
  userLoggedIn: boolean;
};

type CurrentUser = {
  uid: string;
  email: string;
};

const defaultValue: UserContextProps = {
  createUser: () => {},
  signIn: () => {},
  logOut: () => {},
  userData: {},
  userLoggedIn: false,
};

export const UserContext = createContext<UserContextProps>(defaultValue);

export const AuthContextProvider = ({ children }: { children: any }) => {
  const [userData, setUser] = useState<CurrentUser | undefined>();
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const createUser = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password).catch(
      (error) => {
        console.log(error.code, error.message);
      }
    );
  };

  const signIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password).catch((error) => {
      console.log(error.code, error.message);
    });
  };

  const logOut = () => {
    return signOut(auth).catch((error) => {
      console.log(error.code, error.message);
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser: any) => {
      console.log(currentUser);
      setUser(currentUser as CurrentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  //!! check if is truthy
  useEffect(() => {
    setUserLoggedIn(!!userData);
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
