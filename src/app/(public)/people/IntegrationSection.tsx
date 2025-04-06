import { CheckCircleIcon } from "@heroicons/react/16/solid";

export default function IntegrationSection() {
	return (
		<div className='bg-white py-24'>
			<div className='container mx-auto px-6 lg:px-8'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
					<div>
						<h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
							Integración perfecta con Oriana Market
						</h2>
						<p className='mt-6 text-lg leading-8 text-gray-600'>
							Conecte su sistema de RRHH con la gestión financiera para un
							control completo sobre los costos de personal y nómina.
						</p>
						<ul className='mt-8 space-y-4'>
							<li className='flex items-start'>
								<div className='flex-shrink-0'>
									<CheckCircleIcon className='h-6 w-6 text-violet-500' />
								</div>
								<p className='ml-3 text-base text-gray-600'>
									Automatice el procesamiento de nómina basado en asistencia y
									datos de ausencias
								</p>
							</li>
							<li className='flex items-start'>
								<div className='flex-shrink-0'>
									<CheckCircleIcon className='h-6 w-6 text-violet-500' />
								</div>
								<p className='ml-3 text-base text-gray-600'>
									Genere informes financieros que incluyan costos laborales
									completos
								</p>
							</li>
							<li className='flex items-start'>
								<div className='flex-shrink-0'>
									<CheckCircleIcon className='h-6 w-6 text-violet-500' />
								</div>
								<p className='ml-3 text-base text-gray-600'>
									Simplifique los reembolsos de gastos y beneficios para
									empleados
								</p>
							</li>
						</ul>
					</div>
					<div className='relative'>
						<div className='p-8 bg-violet-50 rounded-lg'>
							<div className='absolute -top-4 -left-4 w-20 h-20 bg-white rounded-lg shadow-lg flex items-center justify-center'>
								<div className='text-violet-800 font-bold text-xl'>HR</div>
							</div>
							<div className='absolute -bottom-4 -right-4 w-20 h-20 bg-white rounded-lg shadow-lg flex items-center justify-center'>
								<div className='text-blue-800 font-bold text-xl'>ERP</div>
							</div>
							<div className='h-64 flex items-center justify-center'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1}
									stroke='currentColor'
									className='w-24 h-24 text-violet-700'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5'
									/>
								</svg>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
