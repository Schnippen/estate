//import {Route,Routes} from "react-router-dom"
import LandingPage from "./pages/LandingPage";
import Item from "./pages/Item";
import Offers from "./pages/Offers";
import NotFound from "./components/NotFound";
import { Routes, Route } from "react-router-dom";

/* <Route path='/' element={<Home/>}/> */

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Offers" element={<Offers />} />
        <Route path="/Item" element={<Item />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
