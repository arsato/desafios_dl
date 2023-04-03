import React from "react";
import { useContext } from "react";
import Heart from "./Heart";
import MyContext from "../MyContext";

const ImageCard = ({ id, liked, src, text }) => {
  const { dataFotos, setDataFotos } = useContext(MyContext);

  const modificarLike = (val) => {
    const photoIndex = dataFotos.findIndex((e) => e.id === val);
    dataFotos[photoIndex].liked = !dataFotos[photoIndex].liked;
    setDataFotos([...dataFotos]);
  };

  return (
    <div className="card text-bg-dark">
      <div
        onClick={() => modificarLike(id)}
        className="like-button"
        title="Me gusta!"
      >
        <Heart liked={liked} />
      </div>
      <p className="overlay text-description"> {text}</p>
      <img src={src} className="card-img" alt={text} />
    </div>
  );
};

export default ImageCard;
