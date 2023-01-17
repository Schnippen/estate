import LandingPage from "./pages/LandingPage";
import Item from "./pages/Item";
import Offers from "./pages/Offers";
import NotFound from "./components/NotFound";
import Leaflet from "./Leaflet/Leaflet";
import SignUp from "./components/SignUp";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css"
import CreateForm from "./components/CreateForm/CreateForm";
/* <Route path='/' element={<Home/>}/> */


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Offers" element={<Offers />} />
        <Route path="/Item" element={<Item />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/CreateForm" element={<CreateForm />} />
        <Route path="/Leaflet" element={<Leaflet />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
//
//