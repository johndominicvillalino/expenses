
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = props => {

    const onSavedExpenseData = (enteredExpenseData) => {

        const expenseData = {
            ...enteredExpenseData,
            id: 'e' + Math.random()
        }

        props.onAddExpense(expenseData);
        
     
    }

    return (
        <div className='new-expense'>

            <ExpenseForm onSaveExpenseData={onSavedExpenseData} />

        </div>
    );
}



export default NewExpense;
