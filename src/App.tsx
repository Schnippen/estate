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
import "./App.css";
import CreateForm from "./components/CreateForm/CreateForm";
import { AuthContextProvider } from "./context/AuthContext";
import { MobileContextProvider } from "./context/MobileContext";
import Favorites from "./components/Favorites";

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
      <MobileContextProvider>
        <AuthContextProvider>
          <Navbar />
        </AuthContextProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Offers" element={<Offers />} />
          <Route path="/Item" element={<Item />} />
          <Route path="/UserSignUp" element={<UserSignUp />} />
          <Route path="/CreateForm" element={<CreateForm />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Favorites" element={<Favorites />} />
        </Routes>
        <Footer />
      </MobileContextProvider>
    </>
  );
}

export default App;
//<Route path="/Leaflet" element={<Leaflet />} />
