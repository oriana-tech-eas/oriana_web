import { CalendarIcon, PresentationChartBarIcon, UsersIcon } from "@heroicons/react/24/outline";
import IntegrationSectionItem from "./components/IntegrationSectionItem"

export default function IntegrationSection() {
	return (
		<div className='bg-white py-24'>
			<div className='container mx-auto px-6 lg:px-8'>
				<div className='mx-auto max-w-2xl lg:text-center mb-16'>
					<h2 className='text-base font-semibold leading-7 text-teal-600'>
						Integración Perfecta
					</h2>
					<p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
						Funciona con toda la Suite Oriana
					</p>
					<p className='mt-6 text-lg leading-8 text-gray-600'>
						Intégrese sin esfuerzo con Oriana Market para una solución completa
						de facturación.
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <IntegrationSectionItem
            icon={<PresentationChartBarIcon className='w-6 h-6' />}
            title="Oriana Market"
            description="Genere automáticamente facturas electrónicas conformes desde su sistema de facturación."
          />

          <IntegrationSectionItem
            icon={<UsersIcon className='w-6 h-6' />}
            title="Oriana People"
            description="Cree documentos oficiales de RRHH y recibos de nómina que cumplan con las regulaciones."
          />

          <IntegrationSectionItem
            icon={<CalendarIcon className='w-6 h-6' />}
            title="Oriana Booking"
            description="Genere confirmaciones de citas y recibos de servicios con el formato legal adecuado."
          />
				</div>
			</div>
		</div>
	);
}
