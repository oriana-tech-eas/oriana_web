import TransactionItem, { Transaction } from "./components/TransactionsItem";

const mockTransactions: Transaction[] = [
  { type: 'income', date: 'Hace 5 minutos', description: 'Venta de producto' },
  { type: 'expense', date: 'Hace 12 minutos', description: 'Compra de producto' },
  { type: 'expense', date: 'Hace 20 minutos', description: 'Compra de producto' },
  { type: 'income', date: 'Hace 30 minutos', description: 'Venta de producto' },
  { type: 'income', date: 'Hace 1 hora', description: 'Venta de producto' },
]

const RecentTransactions = () => {
  return (
    <div className="mt-5">
      <h2 className="text-lg font-bold mb-2">Transacciones recientes</h2>
      <ul className="divide-y">
        {
          mockTransactions.map((transaction, index) => (
            <li key={index}>
              <TransactionItem transaction={transaction} />
            </li>
          ))
        }
        <TransactionItem transaction={{ type: 'income', date: 'Hace 5 minutos', description: 'Venta de producto' }} />
      </ul>
    </div>
  );
}

export default RecentTransactions;