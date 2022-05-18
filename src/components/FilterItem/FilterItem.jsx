import "./FilterItem.scss";

const FilterItem = ({ filterValue }) => {
  return (
    <div>
      <input type="checkbox" name="filter1" id="filter1" />
      <label for="filter1">{filterValue}</label>
    </div>
  );
};
export default FilterItem;
