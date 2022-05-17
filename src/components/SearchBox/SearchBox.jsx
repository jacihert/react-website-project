import "./SearchBox.scss";
import React, { useState } from "react";
import CardList from "../CardList/CardList";
// import beers from "../../data/beers";

const SearchBox = ({ beerList }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleInput = (event) => {
    console.log(event.target.value);
    setSearchTerm(event.target.value);
  };
  const filteredBeers = beerList.filter((beer, index) =>
    beer.name.includes(searchTerm)
  );

  // CASE SENSITIVE search

  console.log(filteredBeers);
  return (
    <>
      <input
        className="searchBox"
        type="text"
        value={searchTerm}
        onInput={handleInput}
      />
      {searchTerm && <CardList beerList={filteredBeers} />}
    </>
  );
};

export default SearchBox;
