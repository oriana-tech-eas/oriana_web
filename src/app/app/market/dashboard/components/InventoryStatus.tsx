import { ChartBarIcon } from "@heroicons/react/24/outline";

const InventoryStatus = () => {
	return (
		<div className='bg-white p-6 rounded-xl bordered-component'>
			<div className='flex justify-between items-center mb-6'>
				<h2 className='text-lg font-bold text-neutral-800'>
					Estado de Inventario
				</h2>
				<button className='text-rose-600 text-sm hover:underline'>
					Ver inventario
				</button>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
				<div className='flex items-center'>
					<div className='w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center'>
						<span className='text-amber-600'>
							<ChartBarIcon />
						</span>
					</div>
					<div className='ml-4'>
						<p className='text-neutral-500'>Productos con Stock Bajo</p>
						<p className='text-2xl font-bold'>8 productos</p>
					</div>
				</div>
				<div className='flex items-center'>
					<div className='w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center'>
						<span className='text-blue-600'>
							<ChartBarIcon />
						</span>
					</div>
					<div className='ml-4'>
						<p className='text-neutral-500'>Valor Total del Inventario</p>
						<p className='text-2xl font-bold'>42,500,000 Gs.</p>
					</div>
				</div>
			</div>
		</div>
	);
};
