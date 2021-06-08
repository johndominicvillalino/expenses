import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'


const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020')
    const expenses = props.expenseData;
    const filterChangeHandler = selecterYear => {
        console.log('Expenses.js')
        console.log(selecterYear)
        setFilteredYear(selecterYear)
    }

    const filteredExpenses = expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    let expenseContent = (<p>No Expenses found.</p>);

    if (filteredExpenses.length > 0) {
        expenseContent = filteredExpenses.map(data =>
            <ExpenseItem
                key={data.id}
                title={data.title}
                date={data.date}
                amount={data.amount}
            />
        )

    }

    return (
        <div >
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {expenseContent}

            </Card>
        </div>
    )
}


export default Expenses;