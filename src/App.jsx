import "./App.scss";
import beer from "./assets/images/beer.png";

import Navbar from "./components/Navbar/Navbar";
import React, { useState, useEffect } from "react";
import CardList from "./components/CardList/CardList";

const App = () => {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [highAcidity, setHighAcidity] = useState(false);
  const [highAlcohol, setHighAlcohol] = useState(false);
  const [classicRange, setClassicRange] = useState(false);
  let queryParameter = "";
  let url = "";

  useEffect(() => {
    getBeers(highAlcohol, classicRange, searchTerm);
  }, [highAlcohol, classicRange]);

  const baseUrl = "https://api.punkapi.com/v2/beers?page=1&per_page=80";

  const getBeers = async (highAlcohol, classicRange, input) => {
    if (highAlcohol) {
      queryParameter += "&abv_gt=6";
    }
    if (classicRange) {
      queryParameter += "&brewed_before=01-2010";
    }
    if (input) {
      queryParameter = queryParameter + "&beer_name=" + input;
    }
    url = baseUrl + queryParameter;
    const response = await fetch(url);
    const data = await response.json();
    setBeers(data);
  };

  const handleSelection = (event) => {
    if (event.target.id === "High Acidity") {
      setHighAcidity(!highAcidity);
    }
    if (event.target.id === "High Alcohol") {
      setHighAlcohol(!highAlcohol);
    }
    if (event.target.id === "Classic Range") {
      setClassicRange(!classicRange);
    }
  };
  const handleInput = (event) => {
    const input = event.target.value.toLowerCase();
    setSearchTerm(input);
    getBeers(highAlcohol, classicRange, input);
  };

  const filteredBeers = beers.filter((beer) => beer.ph < 4);

  return (
    <div className="introduction">
      <img className="banner" src={beer} alt="" />
      <h5>
        Browse through a variety of beers, search for a particular beer or
        filter the list based on their prime properties
      </h5>
      <div className="app">
        <Navbar
          searchTerm={searchTerm}
          handleInput={handleInput}
          handleSelection={handleSelection}
        />
        {!highAcidity && <CardList beerList={beers} />}
        {highAcidity && <CardList beerList={filteredBeers} />}
      </div>
    </div>
  );
};
export default App;
