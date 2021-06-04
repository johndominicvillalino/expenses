import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'
import Card from '../UI/Card'
import { useState } from 'react'


const ExpenseItem = (props) => {



    const [title,setTitle] = useState(props.title);

    const clickHandler = (x) => {

        setTitle(x)
        console.log('click!');

    }



    return (

        <Card className='expense-item'>
                  
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
                <div>
                <button onClick={ () => clickHandler(Math.floor(Math.random() *100)) } >
                    change
                </button>
                </div>
            </div>
       
       </Card>
    );
}

export default ExpenseItem;