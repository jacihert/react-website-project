import React from "react";
import "./Card.scss";
import { useState } from "react";
import BeerInfo from "../BeerInfo/BeerInfo";

const Card = ({ name, image, description, caption, beerList, beerId }) => {
  const [showDetails, setShowDetails] = useState(false);
  const handleClick = (event) => {
    setShowDetails(!showDetails);
  };
  console.log(beerId);
  const detailsJSX = <BeerInfo beerList={beerList} beerId={beerId} />;
  const buttonJSX = (
    <button className="card__button" onClick={handleClick}>
      {"More details"}
    </button>
  );

  return (
    <div className="card">
      <div className="card__name">{name}</div>
      <div className="card__caption">{caption}</div>
      <div className="card__container">
        <img className="card--pic" src={image} alt={name + "Image"} />
        <div className="card--description">{description}</div>
      </div>
      {showDetails ? detailsJSX : buttonJSX}
    </div>
  );
};

export default Card;
