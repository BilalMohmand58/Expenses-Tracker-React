import React from "react";
import ExpensesItem from "../ExpensesItem/ExpensesItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.expenses.length === 0) {
    return <h2>No Expenses Found!</h2>;
  }
  return (
    <div className="expensesList">
      {props.expenses.map((expense) => (
        <ExpensesItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
};

export default ExpensesList;
