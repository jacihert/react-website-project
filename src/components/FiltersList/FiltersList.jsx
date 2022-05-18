import React from "react";
import "./FiltersList.scss";
import FilterItem from "../FilterItem/FilterItem";

const FiltersList = () => {
  const filters = ["High Acidity", "High Alcohol", "Classic Range"];

  const filterJSX = filters.map((filter) => (
    <FilterItem filterValue={filter} />
  ));

  return <div> {filterJSX}</div>;
};
export default FiltersList;
