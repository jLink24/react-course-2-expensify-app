import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

// Initialize store
const store = configureStore();

// Print updates to store in console
store.subscribe(() => {
    console.log(getVisibleExpenses(store.getState().expenses,store.getState().filters));
});

// Default dummy expense data
store.dispatch(addExpense({ description: 'Water bill', amount: 4500 }));
store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000 }));
store.dispatch(addExpense({ description: 'rent', createdAt: 200, amount: 109500 }));

// Provider component as a parent component makes the redux store available to the connect function in child components
// The redux store is provided to the store prop
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

// Render the application to the DOM
ReactDOM.render(jsx,document.getElementById('app'));