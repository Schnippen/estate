import LandingPage from "./pages/LandingPage";
import Item from "./pages/Item";
import Offers from "./pages/Offers";
import NotFound from "./components/NotFound";
import Leaflet from "./components/Leaflet";
//import SignUp from "./components/SignUp";
import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

/* <Route path='/' element={<Home/>}/> */

const SignUp = lazy(() => import("./components/SignUp"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Offers" element={<Offers />} />
        <Route path="/Item" element={<Item />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Leaflet" element={<Leaflet />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
