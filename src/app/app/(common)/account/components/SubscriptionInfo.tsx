import Button from "@/components/Button/Button";

export default function SubscriptionInfo({ plan }: { plan?: { name: string; expiresAt?: string } }) {
	return (
		<div className='bg-white dark:bg-neutral-900 rounded-lg bordered-component p-6 mb-6'>
			<h2 className='text-xl font-semibold mb-4'>Suscripción</h2>
			<div className='p-4 border border-rose-200 bg-rose-50 rounded-lg mb-4'>
				<p className='font-bold text-lg text-rose-700'>
					{plan?.name || 'Plan Profesional'}
				</p>
				{plan?.expiresAt && (
					<p className='text-sm text-rose-600 mt-1'>
						Expira en {new Date(plan?.expiresAt).toLocaleDateString()}
					</p>
				)}
			</div>
			<Button variant='primary' className='w-full' href='/app/upgrade'>
				Actualizar plan
			</Button>
		</div>
	);
}
