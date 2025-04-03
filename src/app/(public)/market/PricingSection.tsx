'use client';

import { useState } from 'react';
import PricingCard from './components/PricingCard/PricingCard';

const PricingSection = () => {
	const [isMonthly, setIsMonthly] = useState<boolean>(true);

	return (
		<section className='py-36'>
			<div className='text-center mb-8'>
				<h2 className='text-4xl font-bold mb-16'>Planes disponibles</h2>
				<p className='text-neutral-600'>
					Elige el plan que mejor se adapte a las necesidades de tu negocio.
					Todos los planes incluyen 30 días de prueba gratis.
				</p>
				<div className='mx-auto my-2'>
					<label className='inline-flex items-center cursor-pointer gap-2'>
						<p>Mensual</p>
						<input
							type='checkbox'
							value='plan-billing'
							checked={isMonthly}
							className='sr-only peer'
						/>
						<div
							onClick={() => setIsMonthly(!isMonthly)}
							className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-rose-300 dark:peer-focus:ring-rose-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-rose-600"></div>
						<p>Anual</p>
					</label>
				</div>
			</div>
			<div className='grid grid-cols-12 gap-4 max-w-4xl mx-auto'>
				<PricingCard
					title='Gratis'
					description='Ideal para individuales'
					price='0'
					recommended={false}
					features={[
						'Facturación simplificada',
						'1 Usuario',
						'100 Transacciones mensuales',
						'20 Clientes',
						'50 Productos',
						'Soporte básico',
					]}
					buttonText='Prueba gratuita de 30 días'
					buttonVariant='secondary'
				/>
				<PricingCard
					title='Profesional'
					description='Para pequeñas empresas'
					price={
            isMonthly ? '349.000' : '390.000'
          }
					recommended={true}
					features={[
						'Facturación simplificada',
						'1000 Transacciones mensuales',
						'100 Clientes',
						'100 Productos',
						'3 Usuarios',
						'Soporte prioritario',
					]}
					buttonText='Prueba gratuita de 30 días'
					buttonVariant='primary'
				/>
				<PricingCard
					title='Empresarial'
					description='Para empresas en crecimiento'
					price={
            isMonthly ? '799.000' : '890.000' 
          }
					recommended={false}
					features={[
						'Todo el plan profesional',
						'5000 Transacciones mensuales',
						'500 Clientes',
						'500 Productos',
						'10 Usuarios',
						'Soporte 24/7',
						'Analíticas avanzadas',
					]}
					buttonText='Prueba gratuita de 30 días'
					buttonVariant='secondary'
				/>
			</div>
			<div className='text-center mt-8'>	
				<p className='text-neutral-400 text-sm italic'>
					Para usuarios adicionales, se cobrará un monto adicional. Las tarifas pueden variar sin previo aviso.
				</p>
			</div>
		</section>
	);
};

export default PricingSection;
