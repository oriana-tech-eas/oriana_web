import { CheckCircleIcon } from "@heroicons/react/24/outline";

export default function IntegrationFunction() {
	return (
		<div className='bg-white py-24'>
			<div className='container mx-auto px-6 lg:px-8'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
					<div className='order-2 lg:order-1'>
						<div className='bg-neutral-100 rounded-lg p-8 relative'>
							<div className='bg-white rounded shadow-lg p-4 mb-6'>
								<div className='flex items-center mb-3'>
									<div className='h-4 w-4 rounded-full bg-amber-600 mr-2'></div>
									<div className='text-sm font-medium text-gray-800'>
										Cita confirmada
									</div>
								</div>
								<div className='space-y-2'>
									<div className='h-4 bg-gray-100 rounded w-3/4'></div>
									<div className='h-4 bg-gray-100 rounded w-1/2'></div>
								</div>
							</div>

							<svg
								className='absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 text-amber-950'
								xmlns='http://www.w3.org/2000/svg'
								width='48'
								height='48'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'>
								<path d='M5 12h14'></path>
								<path d='M12 5l7 7-7 7'></path>
							</svg>

							<div className='bg-rose-100 rounded-lg p-4 mt-12'>
								<div className='text-sm font-medium text-rose-900 mb-2'>
									Oriana Market
								</div>
								<div className='space-y-2'>
									<div className='h-4 bg-white/60 rounded w-full'></div>
									<div className='h-4 bg-white/60 rounded w-5/6'></div>
									<div className='h-4 bg-white/60 rounded w-4/6'></div>
								</div>
							</div>
						</div>
					</div>

					<div className='order-1 lg:order-2'>
						<h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
							Integración perfecta con Oriana Market
						</h2>
						<p className='mt-6 text-lg leading-8 text-gray-600'>
							Genere automáticamente facturas a partir de citas y gestione sus
							finanzas en un solo lugar.
						</p>
						<ul className='mt-8 space-y-4'>
							<li className='flex items-start'>
								<div className='flex-shrink-0'>
									<CheckCircleIcon className='h-6 w-6 text-amber-500' />
								</div>
								<p className='ml-3 text-base text-gray-600'>
									Convierta citas completadas en facturas con un solo clic
								</p>
							</li>
							<li className='flex items-start'>
								<div className='flex-shrink-0'>
									<CheckCircleIcon className='h-6 w-6 text-amber-500' />
								</div>
								<p className='ml-3 text-base text-gray-600'>
									Realice seguimiento de ingresos por citas y analice el
									rendimiento del negocio
								</p>
							</li>
							<li className='flex items-start'>
								<div className='flex-shrink-0'>
									<CheckCircleIcon className='h-6 w-6 text-amber-500' />
								</div>
								<p className='ml-3 text-base text-gray-600'>
									Gestione sin problemas los registros de clientes en ambas
									plataformas
								</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
