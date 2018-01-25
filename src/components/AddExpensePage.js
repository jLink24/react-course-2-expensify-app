import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

// This component renders the "add expense page"
//      -Data from the expense form is passed up by the onSubmit function.  
//      -Data passed up is carried on an expense object argument
//      -After a sucessful submission, the onSubmit function then redirects the user to the homepage.  
const AddExpensePage = (props) => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm 
            onSubmit={(expense) => {
                props.dispatch(addExpense(expense));
                props.history.push('/');
            }}
        />
    </div>
);

export default connect()(AddExpensePage);