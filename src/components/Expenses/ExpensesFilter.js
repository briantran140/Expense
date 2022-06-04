// import react from "react";
import "./ExpensesFilter.css";

function ExpensesFilter(props) {
  const dropdownChangeHandler = (event) => {
      // send data back to the parent
    props.onFilterChange(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option>2019</option>
          <option>2020</option>
          <option>2021</option>
          <option>2022</option>
        </select>
      </div>
    </div>
  );
}

export default ExpensesFilter;
