import React from 'react';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import { shallow } from 'enzyme';

test('should correctly render summary for 2 expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={2} expenseTotal={9434}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render summary for 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expenseTotal={9434}/>);
    expect(wrapper).toMatchSnapshot();
});