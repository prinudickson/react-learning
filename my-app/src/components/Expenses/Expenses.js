import React, { useState } from 'react';

import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList'

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(x => {
        return x.date.getFullYear().toString() === filteredYear;
    });



    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onChangeYearFilter={filterChangeHandler} />
                <ExpensesList items={filteredExpenses}/>
            </Card>
            
        </div>
    )
}

export default Expenses;