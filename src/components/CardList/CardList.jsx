import "./CardList.scss";
import React from "react";
import Card from "../../components/Card/Card";

const CardList = ({ beerList }) => {
  const cardJSX = beerList.map((beer, index) => (
    <Card
      name={beer.name}
      image={beer.image_url}
      description={beer.description}
      caption={beer.tagline}
      key={index}
    />
  ));
  return <div className="list">{cardJSX}</div>;
};

export default CardList;
