/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
export default function ConsoleHero() {
	return (
		<div className='bg-white/10 rounded-lg p-6 backdrop-blur-sm shadow-xl'>
			<div className='space-y-4'>
				<div className='bg-teal-900/20 rounded-md p-4 font-mono text-sm text-white'>
					<div className='text-purple-200'>// Example API Request</div>
					<div className='mt-2'>
						<span className='text-pink-300'>POST</span>
						<span className='text-green-300'> /api/v1/documents/invoice</span>
					</div>
					<div className='mt-2 text-blue-200'>{'{'}</div>
					<div className='ml-4'>
						<span className='text-yellow-200'>"client"</span>:{' '}
						<span className='text-green-200'>"Empresa ABC"</span>,
					</div>
					<div className='ml-4'>
						<span className='text-yellow-200'>"amount"</span>:{' '}
						<span className='text-purple-200'>15000000</span>,
					</div>
					<div className='ml-4'>
						<span className='text-yellow-200'>"items"</span>: [...]
					</div>
					<div className='text-blue-200'>{'}'}</div>
				</div>
			</div>
		</div>
	);
}
