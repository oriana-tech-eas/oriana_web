import { BellAlertIcon, CalendarDaysIcon, CheckBadgeIcon, GlobeAltIcon } from "@heroicons/react/24/outline";

export default function FeaturesSection() {
	const featuresList = [
		{
			title: 'Reservas en Línea',
			description:
				'Permita que los clientes agenden citas en línea las 24 horas, reduciendo llamadas telefónicas y trabajo administrativo.',
			icon: <GlobeAltIcon className='h-6 w-6 text-amber-600' />,
		},
		{
			title: 'Recordatorios Automáticos',
			description:
				'Reduzca las ausencias con recordatorios automáticos por email y SMS a los clientes antes de las citas.',
			icon: <BellAlertIcon className='h-6 w-6 text-amber-600' />,
		},
		{
			title: 'Gestión de Recursos',
			description:
				'Administre eficientemente horarios del personal, disponibilidad de salas y asignación de equipos.',
			icon: <CheckBadgeIcon className='h-6 w-6 text-amber-600' />,
		},
		{
			title: 'Integración con Calendarios',
			description:
				'Sincronice con Google Calendar, Outlook y otras aplicaciones populares de calendario.',
			icon: <CalendarDaysIcon className='h-6 w-6 text-amber-600' />,
		},
	];

	return (
		<div id='features' className='py-24 bg-white'>
			<div className='container mx-auto px-6 lg:px-8'>
				<div className='mx-auto max-w-2xl lg:text-center'>
					<h2 className='text-base font-semibold leading-7 text-amber-600'>
						Planificación inteligente
					</h2>
					<p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
						Optimice la gestión de sus citas
					</p>
					<p className='mt-6 text-lg leading-8 text-gray-600'>
						Oriana Booking facilita la gestión de citas para cualquier tipo de
						servicio o individuo. Perfecto para salones, clínicas, profesionales
						independientes y más.
					</p>
				</div>
				<div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl'>
					<div className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
						{featuresList.map((feature, idx) => (
							<div key={idx} className='relative pl-16'>
								<div className='absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-amber-50'>
									{feature.icon}
								</div>
								<h3 className='text-lg font-semibold leading-8 text-gray-900'>
									{feature.title}
								</h3>
								<p className='mt-2 text-base leading-7 text-gray-600'>
									{feature.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
