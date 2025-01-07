// const transactions = [
//   {id: 't_01', customer: 'Rose Roberts', amount: 84},
//   {id: 't_02', customer: 'Chris Cook', amount: 30},
//   {id: 't_03', customer: 'Mary Martin', amount: 42},
//   {id: 't_04', customer: 'Susan Smith', amount: 26},
//   {id: 't_05', customer: 'Rose Roberts', amount: -84},
//   {id: 't_06', customer: 'Rose Roberts', amount: 48},
//   {id: 't_07', customer: 'Susan Smith', amount: 104},
//   {id: 't_08', customer: 'Larry Lewis', amount: 140},
//   {id: 't_09', customer: 'Mary Martin', amount: 10},
//   {id: 't_10', customer: 'Chris Cook', amount: 60},
//   {id: 't_11', customer: 'Susan Smith', amount: -26},
//   {id: 't_12', customer: 'Larry Lewis', amount: -140},
//   {id: 't_13', customer: 'Rose Roberts', amount: 26},
//   {id: 't_14', customer: 'Ryan Roberts', amount: 44},
// ]; 
// <customer>:<amount>

export const TransactionList = (props) => {
  const topCustomer = Math.max(0, ...props.transactions.map(transaction => transaction.amount));

  return (
    <div>
      <ul>
        
        {props.transactions.map((transaction,index) =>  {
          if (transaction.amount == topCustomer) {
            return <li key={transaction.id} className="bg-green-300">{transaction.customer}:{transaction.amount}</li>
          }
          return(
            <li key={transaction.id}>{transaction.customer}:{transaction.amount}</li>
          ) 
          
        })}
      </ul>
    </div>
  )
}