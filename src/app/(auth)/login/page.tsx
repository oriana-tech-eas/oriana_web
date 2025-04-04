import React from 'react';
import LoginForm from './LoginForm';
import Link from 'next/link';
import Card from '../components/Card';
import Button from '@/components/Button/Button';

const Login = () => {
	return (
		<>
			<div className='text-center mb-6'>
				<h1 className='text-3xl font-bold text-neutral-800'>
					Bienvenido de vuelta
				</h1>
				<p className='mt-2 text-neutral-600'>
					Inicia sesión para acceder a tu cuenta de Oriana.
				</p>
			</div>
			<Card>
				<div className='p-6'>
					<LoginForm />
				</div>
				<p className='dark:text-neutral-50 text-center my-5 text-sm'>
					¿No tienes cuenta?
					<Button href='/register' variant='link' className='inline-flex'>
						Regístrate
					</Button>
				</p>
			</Card>
		</>
	);
};

export default Login;
