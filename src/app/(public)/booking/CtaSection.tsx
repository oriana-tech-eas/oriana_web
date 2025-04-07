import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function CtaSection() {
	return (
		<div className='bg-amber-700'>
			<div className='container mx-auto px-6 py-16 lg:px-8 text-center'>
				<h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
					¿Listo para transformar su agenda?
				</h2>
				<p className='mx-auto mt-6 max-w-xl text-lg leading-8 text-amber-100'>
					Únase a las empresas que confían en Oriana Booking para gestionar sus
					citas eficientemente.
				</p>
				<div className='mt-10 flex items-center justify-center gap-x-6'>
					<Link
						href='/app/booking'
						className='rounded-md bg-white px-6 py-3 text-base font-semibold text-amber-700 shadow-sm hover:bg-amber-50'>
						Comience su prueba gratuita
					</Link>
					<Link
						href='#'
						className='text-base font-semibold leading-6 text-white hover:text-amber-200'>
						Ver precios <ArrowRightIcon className='h-4 w-4 inline-block ml-1' />
					</Link>
				</div>
			</div>
		</div>
	);
}
