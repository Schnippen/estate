import React, { createContext, useEffect, useState } from "react";

const MobileContext = createContext(false);

export const MobileContextProvider = ({ children }: { children: any }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  useEffect(() => {
    const query = window.matchMedia("(max-width: 800px)");
    if (query.matches) {
      setIsMobile(true);
    } else setIsMobile(false);
  }, []);

  return (
    <MobileContext.Provider value={isMobile}>{children}</MobileContext.Provider>
  );
};

export default MobileContext;
