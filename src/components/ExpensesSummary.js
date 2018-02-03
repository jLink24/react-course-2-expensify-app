import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectedExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = (props) => (
    <div>
        <p>Viewing {props.expenseCount} expenses totalling {numeral(props.expenseTotal / 100).format('$0,0.00')} </p>
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenseCount: selectExpenses(state.expenses, state.filters).length,
        expenseTotal: selectedExpensesTotal(selectExpenses(state.expenses, state.filters))
    };
};

export default connect(mapStateToProps)(ExpensesSummary);