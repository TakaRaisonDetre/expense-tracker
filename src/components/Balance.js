import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'



export const Balance = () => {
    const {transactions} = useContext(GlobalContext);
 
    const amounts = transactions.map(tran=> tran.amount)
    console.log(amounts)
    const total = amounts.reduce((accumulated, item)=> (accumulated += item), 0).toFixed(2);

    return (
        <>
            <h4>今の貯金</h4>
            <h1>{total}</h1>
        </>
    )
}