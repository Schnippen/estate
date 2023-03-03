import React from "react";

import {useContext } from "react";
import SearchForm from "../components/SearchForm";
import List from "../components/List";
import MobileContext from "../context/MobileContext";

function Offers() {
  const isMobile = useContext(MobileContext);


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
