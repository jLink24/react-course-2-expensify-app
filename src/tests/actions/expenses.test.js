import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

// Test removeExpense
test('should setup remove expense aciton object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

// Test editExpense
test('should setup edit expense action object', () => {
    const action = editExpense('123abc',{ description: 'Cactus', note: 'hello' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            description: 'Cactus',
            note: 'hello'
        }
    })
});

// Test addExpense
test('should setup add expense action object with provided values', () => {
    const expenseData =  { 
        description: 'Rent', 
        amount: 109500, 
        createdAt: 1000,
        note: 'This was last months rent'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('should setup add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: { 
            id: expect.any(String),
            description: '', 
            note: '', 
            amount: 0, 
            createdAt: 0
        }
    });
});