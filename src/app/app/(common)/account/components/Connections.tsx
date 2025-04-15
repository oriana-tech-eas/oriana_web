import Button from "@/components/Button/Button";

export default function Connections() {
	return (
		<div className='bg-white dark:bg-neutral-900 rounded-lg bordered-component p-6'>
			<h2 className='text-xl font-semibold mb-4'>Conexiones</h2>
			<div className='space-y-4'>
				<div className='flex items-center justify-between'>
					<div className='flex items-center'>
						<div className='w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3'>
							G
						</div>
						<div>
							<p className='font-medium'>Google</p>
							<p className='text-xs text-neutral-500'>Conectado</p>
						</div>
					</div>
					<Button variant='ghost-link' size="sm">
						Desconectar
					</Button>
				</div>

				<div className='flex items-center justify-between'>
					<div className='flex items-center'>
						<div className='w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center text-neutral-600 mr-3'>
							S
						</div>
						<div>
							<p className='font-medium'>Slack</p>
							<p className='text-xs text-neutral-500'>No conectado</p>
						</div>
					</div>
					<Button variant='link' size="sm">
						Conectar
					</Button>
				</div>
			</div>
		</div>
	);
}
