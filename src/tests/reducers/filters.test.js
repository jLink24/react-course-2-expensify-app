import moment from 'moment';
import filtersReducer from '../../reducers/filters';

// TEST REDUCER SETUP W/ DEFAULT VALUES
test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

// TEST SORT_BY TOGGLED FROM DATE TO AMOUNT
test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toEqual('amount');
});

// TEST SORT_BY TOGGLED FROM AMOUNT TO DATE
test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = { type: 'SORT_BY_DATE' };
    const state = filtersReducer(currentState,action);
    expect(state.sortBy).toBe('date');
});

// TEST SETTING TEXT FILTER
test('should set text filter', () => {
    const text = 'rent';
    const action = { type: 'SET_TEXT_FILTER', text };
    const state = filtersReducer(undefined,action);
    expect(state.text).toBe(text);
});

// TEST SETTING START_DATE FILTER
test('should set startDate filter', () => {
    const startDate = moment(0).add(4,'days');
    const action = { type: 'SET_START_DATE', startDate };
    const state = filtersReducer(undefined,action);
    expect(state.startDate).toEqual(startDate);
});

// TEST SETTING END_DATE FILTER
test('should set endDate filter', () => {
    const endDate = moment(0).subtract(3,'days');
    const action = { type: 'SET_END_DATE', endDate };
    const state = filtersReducer(undefined,action);
    expect(state.endDate).toEqual(endDate);
});