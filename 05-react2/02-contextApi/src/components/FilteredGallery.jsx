import React, { useContext } from "react";
import MyContext from "../MyContext";
import ImageCard from "./ImageCard";

const FilteredGallery = () => {
  const { dataFotos, setDataFotos } = useContext(MyContext);

  let mapGallery = () => {
    return dataFotos.map(
      (photo) =>
        photo.liked && (
          <ImageCard
            key={photo.id + "A"}
            id={photo.id}
            liked={photo.liked}
            text={photo.text}
            src={photo.src}
          />
        )
    );
  };

  return <div className="gallery">{mapGallery()}</div>;
};

export default FilteredGallery;
