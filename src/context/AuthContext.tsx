import React, { useContext, createContext, useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";

import { firestore } from "../firebase";
/* import {
  where,
  collection,
  getDocs,
  doc,
  setDoc,
  query,
} from "firebase/firestore"; */

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
    console.log("auth", email, password);
    /*     return createUserWithEmailAndPassword(auth, email, password).catch(
      (error) => {
        console.log(error.code, error.message);
      }
    ); */
    return createUserWithEmailAndPassword(auth, email, password).catch(
      (error) => {
        console.log(error);
      }
    );
  };

  /*   const usersCollection = collection(FIRESTORE_DB, 'users');
      const userDocRef = doc(usersCollection, response.user.uid);
      await setDoc(userDocRef, {
        uid: response.user.uid,
        email: response.user.email,
        displayName: response.user.displayName,
        moneyPaid: 0,
        tokens: 30,
      }); */

  const signIn = (email: string, password: string) => {
    console.log(email, password);
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
