import {
	ChartBarSquareIcon,
	ClipboardDocumentListIcon,
	UserPlusIcon,
} from '@heroicons/react/24/outline';

export default function HowItWorks() {
	return (
		<div className='bg-violet-50 py-24'>
			<div className='container mx-auto px-6 lg:px-8'>
				<div className='mx-auto max-w-2xl lg:text-center mb-16'>
					<h2 className='text-base font-semibold leading-7 text-violet-600'>
						Cómo Funciona
					</h2>
					<p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
						Simplifique sus procesos de RRHH
					</p>
					<p className='mt-6 text-lg leading-8 text-gray-600'>
						Nuestro sistema intuitivo le ayuda a gestionar su equipo con mínimo
						esfuerzo.
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
					<div className='flex flex-col items-center text-center'>
						<div className='h-16 w-16 rounded-full bg-violet-100 flex items-center justify-center text-violet-800 mb-4'>
							<UserPlusIcon className='h-8 w-8' />
						</div>
						<h3 className='text-lg font-semibold text-gray-900'>
							Añada Empleados
						</h3>
						<p className='mt-2 text-gray-600'>
							Agregue fácilmente nuevos miembros al equipo y mantenga sus
							registros de personal completos.
						</p>
					</div>

					<div className='flex flex-col items-center text-center'>
						<div className='h-16 w-16 rounded-full bg-violet-100 flex items-center justify-center text-violet-800 mb-4'>
							<ClipboardDocumentListIcon className='h-8 w-8' />
						</div>
						<h3 className='text-lg font-semibold text-gray-900'>
							Gestione Ausencias
						</h3>
						<p className='mt-2 text-gray-600'>
							Maneje solicitudes de permisos, aprobaciones y seguimiento de
							saldos en un solo lugar.
						</p>
					</div>

					<div className='flex flex-col items-center text-center'>
						<div className='h-16 w-16 rounded-full bg-violet-100 flex items-center justify-center text-violet-800 mb-4'>
							<ChartBarSquareIcon className='h-8 w-8' />
						</div>
						<h3 className='text-lg font-semibold text-gray-900'>
							Genere Informes
						</h3>
						<p className='mt-2 text-gray-600'>
							Acceda a información valiosa con informes personalizables sobre
							métricas y tendencias del personal.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
