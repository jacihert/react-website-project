import React from "react";
import "./Card.scss";

const Card = ({ name, image, description, caption }) => {
  return (
    <div className="card">
      <div className="card__name">{name}</div>
      <div className="card__caption">{caption}</div>
      <div className="card__container">
        <img className="card--pic" src={image} alt={name + "Image"} />
        <div className="card--description">{description}</div>
      </div>
    </div>
  );
};

export default Card;
