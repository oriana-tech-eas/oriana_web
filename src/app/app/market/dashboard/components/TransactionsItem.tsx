import { ArrowDownCircleIcon, ArrowUpCircleIcon } from "@heroicons/react/24/outline";

export type Transaction = {
  type: 'income' | 'expense';
  date: string;
  description: string;
}

const TransactionItem = ({ transaction }: { transaction: Transaction}) => {
  const { type, date, description } = transaction;
  const TransactionIcons = {
    'income': <ArrowUpCircleIcon className='size-5' />,
    'expense': <ArrowDownCircleIcon className='size-5' />,
  }
  const TransactionTypeColors = {
    'income': 'bg-success-100 text-success-700',
    'expense': 'bg-danger-100 text-danger-700',
  }

	return (
		<li className='py-4 flex items-center justify-between'>
			<div className='flex items-center gap-2'>
				<div className={`${TransactionTypeColors[type]} size-10 rounded-lg flex items-center justify-center`}>
          {TransactionIcons[type]}
				</div>
				<p>{description}</p>
			</div>
			<p className='text-neutral-500'>{date}</p>
		</li>
	);
};

export default TransactionItem;