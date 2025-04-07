import Link from 'next/link';
import SharedHeroSection from '../_shared/components/SharedHeroSection';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import HeroCalendar from './HeroCalendar';
import FeaturesSection from './FeatureSection';
import BookingFlowSection from './BookingFlowSection';
import IntegrationSection from './IntegrationSection';
import UseCaseSection from './UseCaseSection';

export default function Home() {
	return (
		<div className='bg-white -mt-14'>
			<SharedHeroSection colors={['from-amber-700', 'to-amber-600']}>
				<div className='text-white'>
					<h1 className='text-4xl font-bold tracking-tight sm:text-5xl'>
						Oriana Booking
					</h1>
					<p className='mt-6 text-lg leading-8'>
						Gestor de citas para servicios e individuos. Optimice su proceso de
						programación y nunca vuelva a perder una cita.
					</p>
					<div className='mt-10 flex items-center gap-x-6'>
						<Link
							href='/app/booking'
							className='rounded-md bg-white px-6 py-3 text-base font-semibold text-amber-700 shadow-sm hover:bg-amber-50'>
							Comenzar ahora
						</Link>
						<Link
							href='#features'
							className='text-base font-semibold leading-6 text-white hover:text-amber-100'>
							Saber más <ArrowRightIcon className='h-4 w-4 inline-block ml-1' />
						</Link>
					</div>
				</div>
				<HeroCalendar />
			</SharedHeroSection>
			<FeaturesSection />
			<BookingFlowSection />
			<IntegrationSection />
			<UseCaseSection	/>

			{/* CTA Section */}
			
		</div>
	);
}
