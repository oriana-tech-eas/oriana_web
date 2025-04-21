'use client';

import React, { Suspense } from 'react';
import Container from '@/components/Container/Container';
import Button from '@/components/Button/Button';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import AppointmentForm from '../../components/AppointmentForm';

const NewAppointmentPage = () => {
	return (
		<Container>
			<div className='mb-6 flex items-center'>
				<Button
					variant='ghost-link'
					href='/app/booking/appointments'
					className='mr-4'>
					<ArrowLeftIcon className='h-5 w-5 mr-1' />
					Volver
				</Button>
				<h1 className='text-2xl font-bold dark:text-neutral-50'>Nueva Cita</h1>
			</div>

			<Suspense
				fallback={
					<div className='flex items-center justify-center h-96'>
						<p className='text-lg text-neutral-500'>Cargando...</p>
					</div>
				}>
				<AppointmentForm />
			</Suspense>
		</Container>
	);
};

export default NewAppointmentPage;
