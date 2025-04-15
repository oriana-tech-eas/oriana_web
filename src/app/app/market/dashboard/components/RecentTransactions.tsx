import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/24/outline';
import TransactionItem, { Transaction } from './TransactionsItem';

const recentTransactions = [
	{
		id: 1,
		type: 'income',
		amount: '2,500,000',
		description: 'Venta de producto',
		date: 'Hace 5 minutos',
		customer: 'Carlos Rodriguez',
	},
	{
		id: 2,
		type: 'expense',
		amount: '850,000',
		description: 'Compra de inventario',
		date: 'Hace 12 minutos',
		customer: 'Distribuidora XYZ',
	},
	{
		id: 3,
		type: 'income',
		amount: '1,200,000',
		description: 'Servicio de consultoría',
		date: 'Hace 20 minutos',
		customer: 'Maria Gonzalez',
	},
	{
		id: 4,
		type: 'expense',
		amount: '320,000',
		description: 'Pago de servicios',
		date: 'Hace 30 minutos',
		customer: 'Empresa Eléctrica',
	},
];

const RecentTransactions = () => {
	return (
		<>
			<h2 className='text-lg font-bold mt-5'>Transacciones recientes</h2>
			<div className='space-y-4 rounded-lg bordered-component p-3'>
				{recentTransactions.map((transaction) => (
					<div
						key={transaction.id}
						className='flex items-center justify-between p-3 hover:bg-neutral-50 rounded-lg transition-colors'>
						<div className='flex items-center'>
							<div
								className={`w-10 h-10 rounded-full flex items-center justify-center ${
									transaction.type === 'income' ? 'bg-green-100 dark:bg-green-900' : 'bg-red-100 dark:bg-red-900'
								}`}>
								{transaction.type === 'income' ? (
									<span className='text-green-600 dark:text-green-100'>
										<ArrowUpIcon width={16} />
									</span>
								) : (
									<span className='text-red-600 dark:text-red-100'>
										<ArrowDownIcon width={16} />
									</span>
								)}
							</div>
							<div className='ml-4'>
								<p className='font-medium'>{transaction.description}</p>
								<p className='text-sm text-neutral-500'>
									{transaction.customer}
								</p>
							</div>
						</div>
						<div className='text-right'>
							<p
								className={`font-medium ${
									transaction.type === 'income'
										? 'text-green-600'
										: 'text-red-600'
								}`}>
								{transaction.type === 'income' ? '+' : '-'} {transaction.amount}{' '}
								Gs.
							</p>
							<p className='text-xs text-neutral-500'>{transaction.date}</p>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default RecentTransactions;
