import React from "react";

const ImageCard = ({ image, name, date, vote, overview }) => {
  return (
    <div className="card bg-dark">
      <div className="card-body">
        <img
          className="card-img-top"
          src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${image}`}
          alt={name}
        ></img>
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          Fecha de estreno:{" "}
          {[date.slice(-2), date.slice(5, 7), date.slice(0, 4)].join("-")}
        </p>
        <p className="card-text">Puntuación: {vote}</p>
        <div className="overlay">
          <div className="card-text description">
          <h5 className="card-title">{name}</h5>
            <p className="description-text">{overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
