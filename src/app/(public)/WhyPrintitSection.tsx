const WhyPrintitSection = () => {
	return (
		<section className='py-28 bg-neutral-100'>
			<div className='max-w-6xl mx-auto'>
				<h2 className='title-2 mb-8 text-center'>
					¿Por qué elegir Printit?
				</h2>
				<ul className='grid grid-cols-6 grid-rows-6 gap-6'>
					<li className='border border-neutral-300 flex flex-col justify-end rounded-xl p-5 bg-white col-span-2 row-span-3 min-h-72'>
						<p className='text-xl font-bold'>Facturación simplificada</p>
						<p className='text-neutral-600'>
							Genera facturas en segundos y mantén un control claro de tus
							ventas.
						</p>
					</li>
					<li className='border border-neutral-300 flex flex-col justify-end rounded-xl p-5 bg-white col-span-2 row-span-3 min-h-72'>
						<p className='text-xl font-bold'>Colaboración sencilla</p>
						<p className='text-neutral-600'>
							Accede desde cualquier dispositivo, permite que tu equipo colabore
							fácilmente.
						</p>
					</li>
					<li className='border border-neutral-300 flex flex-col justify-end rounded-xl p-5 bg-white col-span-2 row-span-6'>
						<p className='text-xl font-bold'>Reportes detallados</p>
						<p className='text-neutral-600'>
							Obtén información clara y visual sobre el estado de tu negocio,
							toma decisiones más informadas.
						</p>
					</li>
					<li className='border border-neutral-300 flex flex-col justify-end rounded-xl p-5 bg-white col-span-4 row-span-3 min-h-72'>
						<p className='text-xl font-bold'>Cotizaciones rápidas y precisas</p>
						<p className='text-neutral-600'>
							Crea presupuestos para tus clientes en un clic y conviértelos en
							ventas rápidamente.
						</p>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default WhyPrintitSection;