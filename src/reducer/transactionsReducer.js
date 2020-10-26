const transactionsReducer = (state,action) => {
    switch(action.type){
        case 'ADD_TRANSACTION':
           return{
            ...state,   
            transactions:[...state.transactions,action.payload]
        };
         case 'UPDATE_TRANSACTION':
            const transactionForUpdate = action.payload;
            const updatedTransactions = state.transactions.map(transaction=>{
                if(transaction.id===transactionForUpdate.id){
                    return transactionForUpdate;
                }
                return transaction
            })
            return{
                transactions:updatedTransactions
        };
 
        case 'DELETE_TRANSACTION':
           return{
            ...state,
            transactions: state.transactions.filter(transaction=>transaction.id!==action.payload)
           }
        default:
            return state;
    }
}

export default transactionsReducer;