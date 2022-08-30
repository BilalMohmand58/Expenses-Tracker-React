import React from "react";
import ExpensesDate from "../ExpensesDate/ExpensesDate";
import "./ExpensesItem.css";
const ExpensesItem = (props) => {
  return (
    <div className="expenseItem">
      <ExpensesDate date={props.date} />
      <div className="expenseTitle">{props.title}</div>
      <div className="expenseAmount">{props.amount}</div>
    </div>
  );
};

export default ExpensesItem;
