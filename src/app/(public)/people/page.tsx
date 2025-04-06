import Link from 'next/link';
import SharedHeroSection from '../_shared/components/SharedHeroSection';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import HeroLayoutExample from './HeroLayoutExample';
import FeaturesSection from './FeaturesSection';
import HowItWorks from './HowItWorks';
import IntegrationSection from './IntegrationSection';

export default function Home() {
	return (
		<div className='bg-white -mt-14'>
			<SharedHeroSection colors={['from-violet-700', 'to-violet-600']}>
				<div className='text-white'>
					<h1 className='text-4xl font-bold tracking-tight sm:text-5xl'>
						Oriana People
					</h1>
					<p className='mt-6 text-lg leading-8'>
						Sistema simple de administración de RRHH que funciona de forma
						independiente o se integra perfectamente con Oriana Market. Gestione
						su equipo eficientemente.
					</p>
					<div className='mt-10 flex items-center gap-x-6'>
						<Link
							href='/app/people'
							className='rounded-md bg-white px-6 py-3 text-base font-semibold text-violet-700 shadow-sm hover:bg-violet-50'>
							Comenzar Ahora
						</Link>
						<Link
							href='#features'
							className='text-base font-semibold leading-6 text-white hover:text-violet-100'>
							Conocer más{' '}
							<ArrowRightIcon className='h-4 w-4 inline-block ml-1' />
						</Link>
					</div>
				</div>
				<HeroLayoutExample />
			</SharedHeroSection>

			<FeaturesSection />

			<HowItWorks />

			<IntegrationSection />

			{/* CTA Section */}
			<div className='bg-violet-700'>
				<div className='container mx-auto px-6 py-16 lg:px-8 text-center'>
					<h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
            ¿Listo para optimizar su gestión de RRHH?
					</h2>
					<p className='mx-auto mt-6 max-w-xl text-lg leading-8 text-violet-100'>
            Únase a las empresas que confían en Oriana People para gestionar su activo más valioso - sus empleados.
					</p>
					<div className='mt-10 flex items-center justify-center gap-x-6'>
						<Link
							href='/app/people'
							className='rounded-md bg-white px-6 py-3 text-base font-semibold text-violet-700 shadow-sm hover:bg-violet-50'>
							Comience su prueba gratuita
						</Link>
						<Link
							href='#'
							className='text-base font-semibold leading-6 text-white hover:text-violet-200'>
							Conozca nuestros precios <ArrowRightIcon className='h-4 w-4 inline-block ml-1' />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
