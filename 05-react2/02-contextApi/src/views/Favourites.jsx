import React from "react";
import FilteredGallery from "../components/FilteredGallery";

const Favourites = () => {
  return (
    <div className="favourites">
      <h1>Fotos Favoritas</h1>
      {<FilteredGallery />}
    </div>
  );
};

export default Favourites;
