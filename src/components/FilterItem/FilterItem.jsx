import "./FilterItem.scss";

const FilterItem = ({ filterValue, handleSelection }) => {
  return (
    <div>
      <input
        type="checkbox"
        name="filter"
        id={filterValue}
        value={filterValue}
        onInput={handleSelection}
      />
      <label htmlFor="filter">{filterValue}</label>
    </div>
  );
};
export default FilterItem;
