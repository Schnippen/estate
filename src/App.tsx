import React from "react";
import LandingPage from "./pages/LandingPage";
import Item from "./pages/Item";
import Offers from "./pages/Offers";
import NotFound from "./components/NotFound";
//import Leaflet from "./Leaflet/Leaflet";
import UserSignUp from "./components/Navbar/UserSignUp";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
import CreateForm from "./components/CreateForm/CreateForm";
import { AuthContextProvider } from "./context/AuthContext";
import { MobileContextProvider } from "./context/MobileContext";
import { DarkThemeContextProvider } from "./context/DarkThemeContext";
import Favorites from "./components/Favorites";
import Analitics from "./components/Analitics/Analitics";

function App() {


  return (
    <>
      <MobileContextProvider>
        <DarkThemeContextProvider>
          <AuthContextProvider>
            <Navbar />
          </AuthContextProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/Offers" element={<Offers />} />
            <Route path="/Item/:id" element={<Item />} />
            <Route path="/UserSignUp" element={<UserSignUp />} />
            <Route path="/CreateForm" element={<CreateForm />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Favorites" element={<Favorites />} />
            <Route path="/Analitics" element={<Analitics />} />
          </Routes>
          <Footer />
        </DarkThemeContextProvider>
      </MobileContextProvider>
    </>
  );
}

export default App;