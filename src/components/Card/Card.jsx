import React from "react";
// import beers from "../../data/beers";
import "./Card.scss";

const Card = ({ name, image, description, caption }) => {
  return (
    <div className="card">
      <div className="card__name">{name}</div>
      <div className="card__container">
        <img className="card--pic" src={image} alt={name + "Image"} />
        <div className="card--description">{description}</div>
      </div>
      <div className="card__caption">{caption}</div>
    </div>
  );
};

export default Card;

//beers.name, Image, tagline, description