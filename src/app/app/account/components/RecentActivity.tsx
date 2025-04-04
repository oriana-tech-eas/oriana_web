export default function RecentActivity() {
	return (
		<div className='mt-6 bg-white dark:bg-neutral-900 rounded-lg bordered-component p-6'>
			<h2 className='text-xl font-semibold mb-4'>Actividad reciente</h2>
			<div className='space-y-4 divide-y divide-neutral-300 dark:divide-neutral-700'>
				<div className='flex items-center justify-between py-2'>
					<div>
						<p className='font-medium'>Ultimo inicio de sesión</p>
						<p className='text-sm text-neutral-500'>Today at 9:42 AM</p>
					</div>
					<span className='text-xs bg-green-100 text-green-800 px-2 py-1 rounded'>
						Exitoso
					</span>
				</div>

				<div className='flex items-center justify-between py-2'>
					<div>
						<p className='font-medium'>Contraseña actualizada</p>
						<p className='text-sm text-neutral-500'>May 15, 2023</p>
					</div>
					<span className='text-xs bg-sky-100 text-sky-800 px-2 py-1 rounded'>
						Seguridad
					</span>
				</div>

				<div className='flex items-center justify-between py-2'>
					<div>
						<p className='font-medium'>Cuenta creada</p>
						<p className='text-sm text-neutral-500'>January 3, 2023</p>
					</div>
					<span className='text-xs bg-violet-100 text-violet-800 px-2 py-1 rounded'>
						Registro
					</span>
				</div>
			</div>
		</div>
	);
}
