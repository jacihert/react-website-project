import "./CardList.scss";
import React from "react";
import Card from "../../components/Card/Card";
// import beers from "../../data/beers";

const CardList = ({ beerList }) => {
  console.log(`beers on card`, beerList);
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
