import { useContext } from "react";
import List from "../components/List/List";
import MobileContext from "../context/MobileContext";

function Offers() {
  const isMobile = useContext(MobileContext);

  return (
    <>
      <main>
        <List isMobile={isMobile} />
      </main>
    </>
  );
}

export default Offers;
