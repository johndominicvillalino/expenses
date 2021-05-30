import ExpenseItem from './ExpenseItem';
import './Expenses.css'

function Expenses(props) {

    const expenses = props.expenseData;

    return (
        <div >
            <div className='expenses'>
                {
                    expenses.map(data =>
                        <ExpenseItem  date={data.date} title={data.title} amount={data.amount} />

                    )
                }
            </div>
        </div>
    )





}


export default Expenses;