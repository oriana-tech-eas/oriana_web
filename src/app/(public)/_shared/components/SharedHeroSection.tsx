export default function SharedHeroSection({
	children,
	colors,
}: {
	children: React.ReactNode;
	colors?: string[];
}) {
	const defaultColors = ['from-indigo-800', 'to-purple-600'];
	return (
		<div
			className={`relative bg-gradient-to-r ${
				colors ? colors.join(' ') : defaultColors.join(' ')
			}`}>
			<div className='container mx-auto px-6 py-24 lg:px-8'>
				<div className='grid grid-cols-1 h-[50dvh] lg:grid-cols-2 gap-12 items-center'>
					{children}
				</div>
			</div>
			<div
				className='absolute inset-x-0 bottom-0 h-16 bg-white'
				style={{
					clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%)',
				}}></div>
		</div>
	);
}
