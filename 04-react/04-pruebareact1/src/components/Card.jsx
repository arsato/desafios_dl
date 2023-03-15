import React from "react";

const ImageCard = ({ image, name, date, vote, overview }) => {
  return (
    <div className="card bg-dark" style={{ width: "320px" }}>
      <div className="card-body">
        <img
          className="card-img-top"
          src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${image}`}
        ></img>
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          Fecha de estreno:{" "}
          {[date.slice(-2), date.slice(5, 7), date.slice(0, 4)].join("-")}
        </p>
        <p className="card-text">Puntuación: {vote}</p>
        <p className="card-text">{overview}</p>
      </div>
    </div>
  );
};

export default ImageCard;
