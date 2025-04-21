import { ArrowDownIcon, ArrowUpIcon, BanknotesIcon, UsersIcon } from "@heroicons/react/24/outline";

const OverallStats = () => {
	return (
		<>
			<h2 className='text-lg font-bold mb-4'>Resumen</h2>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
				<div className='bg-white dark:bg-neutral-900 p-6 rounded-xl bordered-component'>
					<div className='flex justify-between items-start'>
						<div>
							<p className='text-sm text-neutral-500'>Ventas del Mes</p>
							<p className='text-2xl font-bold mt-1'>15,200,000 Gs.</p>
							<p className='text-sm text-green-600 flex items-center mt-1'>
								<ArrowUpIcon width={16} height={16} /> 12% vs Mes Anterior
							</p>
						</div>
						<div className='p-2 bg-green-100 dark:bg-green-900 rounded-lg'>
							<span className='text-green-600 dark:text-green-100'>
								<BanknotesIcon width={16} />
							</span>
						</div>
					</div>
				</div>

				<div className='bg-white dark:bg-neutral-900 p-6 rounded-xl bordered-component'>
					<div className='flex justify-between items-start'>
						<div>
							<p className='text-sm text-neutral-500'>Gastos del Mes</p>
							<p className='text-2xl font-bold mt-1'>5,800,000 Gs.</p>
							<p className='text-sm text-red-600 flex items-center mt-1'>
								<ArrowUpIcon width={16} height={16} /> 5% vs Mes Anterior
							</p>
						</div>
						<div className='p-2 bg-red-100 dark:bg-red-900 rounded-lg'>
							<span className='text-red-600 dark:text-red-100'>
								<ArrowDownIcon width={16} />
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default OverallStats;