import ExpenseItem from './ExpenseItem';

function Expenses(props) {

    const expenses = props.expenseData;

    return (
        <div>
            {
                expenses.map(data =>

                    <ExpenseItem date={data.date} title={data.title} amount={data.amount} />

                )
            }
        </div>
    )





}


export default Expenses;