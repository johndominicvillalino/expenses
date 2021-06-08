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

    return (
        <div >

            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {
                    expenses.map(data =>
                        <ExpenseItem 
                        key={data.id}
                        title={data.title} 
                        date={data.date} 
                        amount={data.amount} 
                        />

                    )
                }
            </Card>
        </div>
    )





}


export default Expenses;