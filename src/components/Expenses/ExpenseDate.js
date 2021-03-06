// import react from "react";
import "./ExpenseDate.css";

function ExpenseDate(props) {
  const year = props.date.getFullYear();
  const month = props.date.toLocaleDateString("en-US", { month: "long" });
  const day = props.date.toLocaleDateString("en-US", { day: "numeric" });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}

export default ExpenseDate;
