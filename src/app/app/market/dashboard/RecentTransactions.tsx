import TransactionItem, { Transaction } from './components/TransactionsItem';

const mockTransactions: Transaction[] = [
	{ type: 'income', date: 'Hace 5 minutos', description: 'Venta de producto' },
	{
		type: 'expense',
		date: 'Hace 12 minutos',
		description: 'Compra de producto',
	},
	{
		type: 'expense',
		date: 'Hace 20 minutos',
		description: 'Compra de producto',
	},
	{ type: 'income', date: 'Hace 30 minutos', description: 'Venta de producto' },
	{ type: 'income', date: 'Hace 1 hora', description: 'Venta de producto' },
];

const RecentTransactions = () => {
	return (
		<>
			<h2 className='text-lg font-bold mt-5'>Transacciones recientes</h2>
			<div className='mt-3 bordered-component p-5 rounded-lg'>
				<ul className='divide-y'>
					{mockTransactions.map((transaction, index) => (
						<TransactionItem key={index} transaction={transaction} />
					))}
					<TransactionItem
						transaction={{
							type: 'income',
							date: 'Hace 5 minutos',
							description: 'Venta de producto',
						}}
					/>
				</ul>
			</div>
		</>
	);
};

export default RecentTransactions;
