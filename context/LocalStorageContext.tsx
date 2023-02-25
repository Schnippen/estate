import React, { createContext, useEffect, useState } from "react";

const LocalStorageContext = createContext<any>(null);

export const LocalStorageProvider = ({ children }: any) => {
  const [favorites, setIsFavorites] = useState<any>([]);
  const [favoritesItemId, setFavoritesItemId] = useState<number | null>(0);

  useEffect(() => {
    const storedItems =
      JSON.parse(localStorage.getItem("myFavorites") ?? "") || [];
    setIsFavorites(storedItems);
  }, []);

  useEffect(() => {
    localStorage.setItem("myFavorites", JSON.stringify(favorites));
  }, [favorites]);

  function addFavorite() {
    const newItem = { id: children };
    setIsFavorites([...favorites, newItem]);
  }

  function removeFavorite(id: number) {
    setIsFavorites(
      favorites.filter((favorite: { id: number }) => favorite.id !== id)
    );
    if (favoritesItemId === id) {
      setFavoritesItemId(null);
    }
  }

  function selectFavorite(id: number) {
    setFavoritesItemId(id);
    console.log(favoritesItemId);
  }

  const contextValue: {
    favorites: never[];
    addFavorite: () => void;
    removeFavorite: (id: any) => void;
    favoritesItemId: number | null;
    selectFavorite: (id: any) => void;
  } = {
    favorites,
    addFavorite,
    removeFavorite,
    favoritesItemId,
    selectFavorite,
  };
  console.log(favorites);
  return (
    <LocalStorageContext.Provider value={contextValue}>
      {children}
    </LocalStorageContext.Provider>
  );
};

export default LocalStorageContext;
//children prop.OfferID?
