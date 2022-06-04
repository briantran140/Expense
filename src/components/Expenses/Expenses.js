import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import Card from "../UI/Card";
import Chart from "../Chart/Chart";
import ExpensesFilter from "./ExpensesFilter";
function Expenses(props) {
  const [filteredYear, setFilterYear] = useState("2020");
  const filterChangeHandler = (year) => {
    setFilterYear(year);
  };

  // make an array that matches the filtered year.
  const filteredExpenses = props.items.filter(
    (item) => item.date.getFullYear().toString() === filteredYear
  );

  // selected value = filteredYear because we want to set the default value for the year to the filteredYear every time we refresh the page.
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onFilterChange={filterChangeHandler}
      />
      <Chart expenses={filteredExpenses}></Chart>
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
