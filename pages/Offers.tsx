import React from "react";

import { useState, useEffect } from "react";
import SearchForm from "../components/SearchForm";
import List from "../components/List";

function Offers() {
  
  const [isMobile, setIsMobile] = useState<boolean>(false);
  useEffect(() => {
    const query = window.matchMedia("(max-width: 800px)");
    if (query.matches) {
      setIsMobile(true);
    } else setIsMobile(false);
  }, []);

  return (
    <>
      <SearchForm />
      <main>
        <List isMobile={isMobile} />
      </main>
    </>
  );
}

export default Offers;
