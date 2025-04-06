export default function HeroCalendar() {
	return (
		<div className='hidden lg:block'>
			<div className='bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-xl'>
				<div className='grid grid-cols-7 gap-2'>
					{['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, idx) => (
						<div key={idx} className='text-center text-white font-medium py-2'>
							{day}
						</div>
					))}

					{Array.from({ length: 35 }).map((_, idx) => {
						const hasAppointment = idx % 7 !== 0 && idx % 5 === 0;
						const isToday = idx === 15;

						return (
							<div
								key={idx}
								className={`rounded-md p-2 text-center ${
									isToday
										? 'bg-white text-amber-800 font-bold'
										: hasAppointment
										? 'bg-amber-500/50'
										: 'bg-white/5'
								}`}>
								{idx + 1}
								{hasAppointment && (
									<div className='mt-1 h-1.5 w-full bg-white/50 rounded-full'></div>
								)}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
