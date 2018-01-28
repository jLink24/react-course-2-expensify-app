import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
    // Create onSubmit event handler
    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id,expense);
        this.props.history.push('/');
    }
    onClick = () => { 
        this.props.removeExpense({ id: this.props.expense.id });
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                />
                <button onClick={this.onClick}>Remove</button>
            </div>
        );
    }
}

// This function returns an object that will be merged with the props object of the HOC
// The state is passed as the 1st argument and the props that will be merged into is the 2nd
const mapStateToProps = (state, props) => {
   return {
       expense: state.expenses.find((expense) => expense.id === props.match.params.id)
   }; 
};

const mapDispatchToProps = (dispatch) => ({
    editExpense: (id,expense) => dispatch(editExpense(id,expense)),
    removeExpense: (expense) => dispatch(removeExpense({ id: expense.id }))
});

export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage);