import React,{createContext,useReducer} from 'react';
import transactionsReducer from '../reducer/transactionsReducer';

const initialState = {
   transactions:[ 
   /*  {id:0,title:'Sample Transaction',amount:100,category:'income'},
    {id:1,title:'Sample Transaction',amount:50,category:'expense'},
    {id:2,title:'Sample Transaction',amount:5000,category:'income'},
    {id:3,title:'Sample Transaction',amount:10000,category:'income'},
    {id:4,title:'Sample Transaction',amount:1000,category:'expense'},
    {id:5,title:'Sample Transaction',amount:100,category:'income'},
    {id:6,title:'Sample Transaction',amount:1000,category:'expense'},
    {id:7,title:'Sample Transaction',amount:100000,category:'income'}, */
    ]
}


export const AppContext = createContext(initialState);

export const AppProvider = ({children}) => {
    const [state,dispatch] = useReducer(transactionsReducer,initialState)
    
    const addTransaction = (transaction) =>{
        dispatch({type:'ADD_TRANSACTION',payload:transaction})
    }

    const deleteTransaction = (id) => {
       dispatch({type:'DELETE_TRANSACTION',payload:id})
    }

    const updateTransaction = (transaction) => {
        dispatch({type:'UPDATE_TRANSACTION',payload:transaction}) 
        console.log('Update transaction called',transaction);
     }
 
    return(
        <AppContext.Provider value={{transactions:state.transactions,deleteTransaction,addTransaction,updateTransaction}}>
            {children}
        </AppContext.Provider>
    )
}


