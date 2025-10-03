'use client';

import Button from "@/components/Button/Button";
import Link from "next/link";
import { signIn } from "next-auth/react";

export default function ActionButtons({ closeMenu, orientation }: { closeMenu: () => void, orientation: 'mobile' | 'desktop' }) {
  const loadClass = {
    mobile: 'block w-full rounded-md bg-orange-600 px-3 py-2 text-center text-base font-medium text-white hover:bg-orange-700',
    desktop: 'ml-8 inline-flex items-center justify-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-orange-700'
  }

	return (
		<>
			<Button
				variant='secondary'
				onClick={() =>{
					closeMenu();
					signIn('keycloak')
				}}>
				Iniciar Sesión
			</Button>
			<Button
				variant='primary'
				onClick={() => {
					closeMenu();
					signIn('keycloak', { callbackUrl: '/app/account' });
				}}
				className={`${loadClass[orientation]}`}
			>
				Registrarse
			</Button>
		</>
	);
}
