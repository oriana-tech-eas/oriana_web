export default function HeroLayoutExample() {
	return (
		<div className='hidden lg:block'>
			<div className='relative bg-white/10 rounded-xl shadow-xl p-6 backdrop-blur-sm'>
				<div className='grid grid-cols-2 gap-4'>
					<div className='col-span-2'>
						<div className='h-12 bg-violet-900/20 rounded flex items-center px-4'>
							<div className='h-6 w-6 rounded-full bg-white/40 mr-3'></div>
							<div className='h-4 w-32 bg-white/40 rounded'></div>
						</div>
					</div>

					<div className='space-y-3 p-4 bg-violet-900/10 rounded'>
						<div className='h-4 w-full bg-white/30 rounded'></div>
						<div className='h-4 w-2/3 bg-white/30 rounded'></div>
						<div className='h-4 w-5/6 bg-white/30 rounded'></div>
						<div className='h-4 w-3/4 bg-white/30 rounded'></div>
					</div>

					<div className='space-y-3 p-4 bg-violet-900/10 rounded'>
						<div className='h-20 w-20 mx-auto rounded-full bg-white/30'></div>
						<div className='h-4 w-3/4 mx-auto bg-white/30 rounded'></div>
						<div className='h-4 w-1/2 mx-auto bg-white/30 rounded'></div>
					</div>
				</div>
			</div>
		</div>
	);
}
