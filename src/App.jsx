import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import React, { useState, useEffect } from "react";
import CardList from "./components/CardList/CardList";

const App = () => {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [highAcidity, setHighAcidity] = useState("");
  const [highAlcohol, setHighAlcohol] = useState("");
  const [classicRange, setClassicRange] = useState("");

  useEffect(() => {
    getBeers(highAcidity, highAlcohol, classicRange);
  }, [highAcidity, highAlcohol, classicRange]);

  const baseUrl = "https://api.punkapi.com/v2/beers";

  const getBeers = async (highAcidity, highAlcohol, classicRange) => {
    let queryParameter = "";
    let url = "";
    if (highAlcohol) {
      queryParameter += "abv_gt=6";
    }
    if (classicRange) {
      if (queryParameter) {
        queryParameter += "&";
      }
      queryParameter += "brewed_before=01-2010";
    }
    console.log(queryParameter);
    if (queryParameter) {
      url = baseUrl + "?" + queryParameter;
    } else {
      url = baseUrl + "/";
    }

    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    setBeers(data);
  };

  const handleSelection = (event) => {
    //id to find which one is checked
    // update the state to whether it has been checked or not
    if (event.target.id === "High Acidity") {
      setHighAcidity(event.target.checked);
    }
    if (event.target.id === "High Alcohol") {
      setHighAlcohol(event.target.checked);
    }
    if (event.target.id === "Classic Range") {
      setClassicRange(event.target.checked);
    }
  };
  const handleInput = (event) => {
    setSearchTerm(event.target.value);
  };
  const searchedBeers = beers.filter((beer) =>
    beer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredBeers = beers.filter((beer) => beer.ph < 4);

  const searchedFilteredBeers = searchedBeers.filter((beer) => beer.ph < 4);

  return (
    <div className="app">
      <Navbar
        searchTerm={searchTerm}
        handleInput={handleInput}
        handleSelection={handleSelection}
      />

      {!searchTerm && !highAcidity && <CardList beerList={beers} />}
      {!searchTerm && highAcidity && <CardList beerList={filteredBeers} />}

      {searchTerm && !highAcidity && <CardList beerList={searchedBeers} />}
      {searchTerm && highAcidity && (
        <CardList beerList={searchedFilteredBeers} />
      )}
    </div>
  );
};
export default App;
