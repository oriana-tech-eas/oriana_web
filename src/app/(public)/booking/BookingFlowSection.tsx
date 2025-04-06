import { CheckCircleIcon, ClockIcon, ListBulletIcon, UserCircleIcon } from "@heroicons/react/24/outline";

export default function BookingFlowSection() {
	const bookingSteps = [
		{
			step: '1',
			title: 'Elegir Servicio',
			description:
				'Los clientes seleccionan el servicio que necesitan de su catálogo personalizable.',
			icon: <ListBulletIcon className='h-6 w-6 text-amber-900' />,
		},
		{
			step: '2',
			title: 'Seleccionar Horario',
			description:
				'Se muestran las franjas horarias disponibles según su agenda y preferencias.',
			icon: <ClockIcon className='h-6 w-6 text-amber-900' />,
		},
		{
			step: '3',
			title: 'Datos del Cliente',
			description:
				'El cliente proporciona su información o accede a su cuenta existente.',
			icon: <UserCircleIcon className='h-6 w-6 text-amber-900' />,
		},
		{
			step: '4',
			title: 'Confirmación',
			description:
				'La reserva se confirma con notificaciones automáticas para ambas partes.',
			icon: <CheckCircleIcon className='h-6 w-6 text-amber-900' />,
		},
	];

	return (
		<div className='bg-amber-50 py-24'>
			<div className='container mx-auto px-6 lg:px-8'>
				<div className='mx-auto max-w-2xl lg:text-center mb-16'>
					<h2 className='text-base font-semibold leading-7 text-amber-600'>
            Flujo de Reservas Simple
					</h2>
					<p className='mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl'>
            Cómo funciona
					</p>
					<p className='mt-6 text-lg leading-8 text-neutral-600'>
            Una experiencia sin complicaciones tanto para usted como para sus clientes.
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
					{bookingSteps.map((step, idx) => (
						<div key={idx} className='relative'>
							{idx < 3 && (
								<div className='hidden md:block absolute top-20 left-full w-full h-0.5 bg-amber-200 z-0 -translate-y-1/2'>
									<div className='absolute top-0 right-0 h-3 w-3 -mt-1 mr-1 bg-amber-400 transform rotate-45'></div>
								</div>
							)}
							<div className='bg-white rounded-lg p-6 shadow-md relative z-10'>
								<div className='h-16 w-16 rounded-full bg-amber-100 flex items-center justify-center text-amber-800 mb-4'>
									{step.icon}
								</div>
								<div className='absolute top-0 right-0 -mt-3 -mr-3 bg-amber-600 text-white h-8 w-8 rounded-full flex items-center justify-center font-bold'>
									{step.step}
								</div>
								<h3 className='text-lg font-semibold text-neutral-900'>
									{step.title}
								</h3>
								<p className='mt-2 text-neutral-600'>{step.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
