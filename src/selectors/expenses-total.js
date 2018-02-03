export default (expenses) => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const total = expenses.map(expense => expense.amount).reduce(reducer,0);
    return total;
};