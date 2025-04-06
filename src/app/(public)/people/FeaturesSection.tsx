import { BanknotesIcon, CalendarDaysIcon, ChartBarSquareIcon, UserIcon } from "@heroicons/react/24/outline";

export default function FeaturesSection() {
  const featuresList = [
    {
      title: 'Registros de Empleados',
      description: 'Mantenga perfiles completos de empleados con toda la información personal y profesional relevante.',
      icon: <UserIcon className='h-6 w-6 text-white' />,
    },
    {
      title: 'Gestión de Ausencias',
      description: 'Realice seguimiento de vacaciones, permisos por enfermedad y otros tipos de ausencias con flujos automatizados de acumulación y aprobación.',
      icon: <CalendarDaysIcon className='h-6 w-6 text-white' />,
    },
    {
      title: 'Integración con Nómina',
      description: 'Conéctate sin problemas con Oriana Market para un procesamiento integrado de nómina y gestión financiera.',
      icon: <BanknotesIcon className='h-6 w-6 text-white' />,
    },
    {
      title: 'Seguimiento del Desempeño',
      description: 'Documente evaluaciones, objetivos y logros para apoyar el desarrollo de los empleados.',
      icon: <ChartBarSquareIcon className='h-6 w-6 text-white' />,
    },
  ];
	return (
		<div id='features' className='py-24 bg-white'>
			<div className='container mx-auto px-6 lg:px-8'>
				<div className='mx-auto max-w-2xl lg:text-center'>
					<h2 className='text-base font-semibold leading-7 text-violet-600'>
						Gestión de RRHH
					</h2>
					<p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            Todo lo que necesita para administrar su equipo
					</p>
					<p className='mt-6 text-lg leading-8 text-gray-600'>
            Oriana People simplifica la administración de RRHH con herramientas intuitivas que le ayudan a cuidar su activo más valioso - sus empleados.
					</p>
				</div>
				<div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl'>
					<div className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
						{featuresList.map((feature, idx) => (
							<div key={idx} className='relative pl-16'>
								<div className='absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-violet-600'>
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
