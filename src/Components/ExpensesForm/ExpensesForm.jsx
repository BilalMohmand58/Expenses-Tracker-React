import React, { useState } from "react";
import "./ExpensesForm.css";

const ExpensesForm = (props) => {
  //Multi-state approach
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    if (
      enteredTitle.trim().length === 0 ||
      enteredAmount.trim().length === 0 ||
      enteredDate.trim().length === 0
    ) {
      return 0;
    }
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form className="expenseForm" onSubmit={submitHandler}>
      <div className="formControls">
        <div className="formControl">
          <label htmlFor="">Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>

        <div className="formControl">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>

        <div className="formControl">
          <label htmlFor="">Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2026-12-31"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button className="cancelbtn" type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className="addbtn" type="submit">
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpensesForm;
