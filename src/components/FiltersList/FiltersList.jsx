import React from "react";
import "./FiltersList.scss";
import FilterItem from "../FilterItem/FilterItem";

const FiltersList = ({ handleSelection }) => {
  const filters = ["High Acidity", "High Alcohol", "Classic Range"];

  const filterJSX = filters.map((filter) => (
    <FilterItem filterValue={filter} handleSelection={handleSelection} />
  ));

  return <div> {filterJSX}</div>;
};
export default FiltersList;
