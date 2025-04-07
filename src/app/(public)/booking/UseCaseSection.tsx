import { BriefcaseIcon, HeartIcon, PlusCircleIcon } from "@heroicons/react/24/outline";

export default function UseCaseSection() {
	const useCases = [
		{
			title: 'Salud',
			description:
				'Gestione citas de pacientes, consultas médicas y programación de tratamientos.',
			icon: <PlusCircleIcon className='h-8 w-8 text-amber-800' />,
		},
		{
			title: 'Belleza y Bienestar',
			description:
				'Programe servicios de salón, spa y bienestar con asignación de personal.',
			icon: <HeartIcon className='h-8 w-8 text-amber-800' />,
		},
		{
			title: 'Profesionales Independientes',
			description:
				'Perfecto para consultores, tutores y profesionales autónomos.',
			icon: <BriefcaseIcon className='h-8 w-8 text-amber-800' />,
		},
	];

	return (
		<div className='bg-amber-50 py-24'>
			<div className='container mx-auto px-6 lg:px-8'>
				<div className='mx-auto max-w-2xl lg:text-center mb-16'>
					<h2 className='text-base font-semibold leading-7 text-amber-600'>
            Solución Versátil
					</h2>
					<p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            Perfecta para diversas industrias
					</p>
					<p className='mt-6 text-lg leading-8 text-gray-600'>
						Oriana Booking se adapta a las necesidades únicas de diferentes tipos de negocios.
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					{useCases.map((useCase, idx) => (
						<div key={idx} className='bg-white rounded-lg p-6 shadow-md'>
							<div className='h-16 w-16 rounded-full bg-amber-100 flex items-center justify-center mb-4'>
								{useCase.icon}
							</div>
							<h3 className='text-lg font-semibold text-gray-900'>
								{useCase.title}
							</h3>
							<p className='mt-2 text-gray-600'>{useCase.description}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
