import { Metadata } from 'next';
import Products from './components/Products';
import AuthLogo from './components/AuthLogo';

export const metadata: Metadata = {
	title: 'Iniciar sesión - Oriana Tech',
	description:
		'Inicia sesión en tu cuenta de Oriana Tech para acceder a todas nuestras herramientas y servicios.',
};

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className='min-h-screen flex flex-col justify-center items-center bg-neutral-50 px-4'>
			<div className='w-full max-w-md'>
				<AuthLogo />

				{children}

				<Products />
			</div>
		</section>
	);
}
