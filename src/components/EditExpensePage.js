import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
    return (
        <div>
            <ExpenseForm
                expense={props.expense}
                onSubmit={(expense) => {
                    props.dispatch(editExpense(props.expense.id,expense));
                    props.history.push('/');
                }}
            />
            <button onClick={() => {
                props.dispatch(removeExpense({ id: props.expense.id }));
                props.history.push('/');
            }}>Remove</button>
        </div>
    );
};

// This function returns an object that will be merged with the props object of the HOC
// The state is passed as the 1st argument and the props that will be merged into is the 2nd
const mapStateToProps = (state, props) => {
   return {
       expense: state.expenses.find((expense) => expense.id === props.match.params.id)
   } 
};

export default connect(mapStateToProps)(EditExpensePage);