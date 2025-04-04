import Navigation from '../_shared/components/Navigation/Navigation';

export default function PublicLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<Navigation brandImage='/brand/oriana-market.svg' />
			{children}
		</>
	);
}
