import ExpenseItem from './ExpenseItem';
import './Expenses.css'
import Card from '../UI/Card'

function Expenses(props) {

    const expenses = props.expenseData;

    return (
        <div >
            <Card className='expenses'>
                {
                    expenses.map(data =>
                        <ExpenseItem  date={data.date} title={data.title} amount={data.amount} />

                    )
                }
            </Card>
        </div>
    )





}


export default Expenses;