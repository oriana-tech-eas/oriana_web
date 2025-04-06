import Link from 'next/link';
import SharedHeroSection from '../_shared/components/SharedHeroSection';
import { ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import HeroCalendar from './HeroCalendar';
import FeaturesSection from './FeatureSection';
import BookingFlowSection from './BookingFlowSection';

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

			{/* Booking Flow */}
			<BookingFlowSection />

			{/* Integration with Market */}
			<div className='bg-white py-24'>
				<div className='container mx-auto px-6 lg:px-8'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
						<div className='order-2 lg:order-1'>
							<div className='bg-amber-100 rounded-lg p-8 relative'>
								<div className='bg-white rounded shadow-lg p-4 mb-6'>
									<div className='flex items-center mb-3'>
										<div className='h-4 w-4 rounded-full bg-amber-600 mr-2'></div>
										<div className='text-sm font-medium text-gray-800'>
											Appointment Confirmed
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
								Genere automáticamente facturas a partir de citas y gestione sus finanzas en un solo lugar.
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
										Realice seguimiento de ingresos por citas y analice el rendimiento del negocio
									</p>
								</li>
								<li className='flex items-start'>
									<div className='flex-shrink-0'>
										<CheckCircleIcon className='h-6 w-6 text-amber-500' />
									</div>
									<p className='ml-3 text-base text-gray-600'>
										Gestione sin problemas los registros de clientes en ambas plataformas
									</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			{/* Use Cases */}
			<div className='bg-amber-50 py-24'>
				<div className='container mx-auto px-6 lg:px-8'>
					<div className='mx-auto max-w-2xl lg:text-center mb-16'>
						<h2 className='text-base font-semibold leading-7 text-amber-600'>
							Versatile Solution
						</h2>
						<p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
							Perfect for various industries
						</p>
						<p className='mt-6 text-lg leading-8 text-gray-600'>
							Oriana Booking adapts to the unique needs of different business
							types.
						</p>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						{[
							{
								title: 'Healthcare',
								description:
									'Manage patient appointments, medical consultations, and treatment schedules.',
								icon: (
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										strokeWidth={1.5}
										stroke='currentColor'
										className='w-8 h-8'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
										/>
									</svg>
								),
							},
							{
								title: 'Beauty & Wellness',
								description:
									'Schedule salon, spa, and wellness services with staff assignment.',
								icon: (
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										strokeWidth={1.5}
										stroke='currentColor'
										className='w-8 h-8'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
										/>
									</svg>
								),
							},
							{
								title: 'Freelancers',
								description:
									'Perfect for consultants, tutors, and independent professionals.',
								icon: (
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										strokeWidth={1.5}
										stroke='currentColor'
										className='w-8 h-8'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z'
										/>
									</svg>
								),
							},
						].map((useCase, idx) => (
							<div key={idx} className='bg-white rounded-lg p-6 shadow-md'>
								<div className='h-16 w-16 rounded-full bg-amber-100 flex items-center justify-center text-amber-800 mb-4'>
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

			{/* CTA Section */}
			<div className='bg-amber-700'>
				<div className='container mx-auto px-6 py-16 lg:px-8 text-center'>
					<h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
						Ready to transform your scheduling?
					</h2>
					<p className='mx-auto mt-6 max-w-xl text-lg leading-8 text-amber-100'>
						Join businesses that trust Oriana Booking to manage their
						appointments efficiently.
					</p>
					<div className='mt-10 flex items-center justify-center gap-x-6'>
						<Link
							href='/app/booking'
							className='rounded-md bg-white px-6 py-3 text-base font-semibold text-amber-700 shadow-sm hover:bg-amber-50'>
							Start your free trial
						</Link>
						<Link
							href='#'
							className='text-base font-semibold leading-6 text-white hover:text-amber-200'>
							View pricing <span aria-hidden='true'>→</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
