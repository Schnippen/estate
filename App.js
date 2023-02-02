import LandingPage from "./pages/LandingPage";
import Item from "./pages/Item";
import Offers from "./pages/Offers";
import NotFound from "./components/NotFound";
import Leaflet from "./Leaflet/Leaflet";
import UserSignUp from "./components/UserSignUp";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import CreateForm from "./components/CreateForm/CreateForm";
import React, { createContext, useState } from "react";
import { AuthContextProvider } from "./context/AuthContext";

//user context
function App() {
  /*
  const [user, setUser] = useState();
  const [isLogged, setIsLogged] = useState();
  const UserContext = createContext(null);
  isMobile???
  */

  return (
    <>
      <AuthContextProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Offers" element={<Offers />} />
          <Route path="/Item" element={<Item />} />
          <Route path="/UserSignUp" element={<UserSignUp />} />
          <Route path="/CreateForm" element={<CreateForm />} />
          <Route path="/Leaflet" element={<Leaflet />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </AuthContextProvider>
    </>
  );
}

export default App;
//
//
