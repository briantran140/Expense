import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  // the purpose of using isEditing is to change the view between the Add New Expense and the form. When isEditing = true, we show the form to the client.
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  // Transfering data to App.js and add id to the object
  const saveExpenseDataHandler = (enteredData) => {
    const expenseData = {
      ...enteredData,
      id: Math.random().toString(),
    };
    props.onAddNewExpense(expenseData);
  };
  return (
    <div className="new-expense">
      {isEditing && (
        <ExpenseForm
          onStopEditing={stopEditingHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
      {!isEditing && (
        <button type="button" onClick={startEditingHandler}>
          Add New Expense
        </button>
      )}
    </div>
  );
}

export default NewExpense;
