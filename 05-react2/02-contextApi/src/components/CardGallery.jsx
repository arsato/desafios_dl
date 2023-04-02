import React, { useContext } from "react";
import MyContext from "../MyContext";
import Heart from "./Heart";

const CardGallery = () => {
  const { dataFotos, setDataFotos } = useContext(MyContext);

  const modificarLike = (val) => {
    const photoIndex = dataFotos.findIndex((e) => e.id === val);
    dataFotos[photoIndex].liked = !dataFotos[photoIndex].liked;
    setDataFotos([...dataFotos]);
  };

  return (
    <div className="gallery">
      {dataFotos.map((photo) => (
        <div key={photo.id} className="card text-bg-dark">
          <div
            onClick={() => modificarLike(photo.id)}
            className="like-button"
            title="Me gusta!"
          >
            <Heart liked={photo.liked}/>
          </div>
          <p className="overlay text-description"> {photo.text}</p>
          <img src={photo.src} className="card-img" alt={photo.text} />
        </div>
      ))}
    </div>
  );
};

export default CardGallery;
