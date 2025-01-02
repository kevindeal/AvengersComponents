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