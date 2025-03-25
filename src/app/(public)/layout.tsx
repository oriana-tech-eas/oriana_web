import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';

export default function PublicLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<Navigation />
			{children}
			<Footer />
		</>
	);
}
