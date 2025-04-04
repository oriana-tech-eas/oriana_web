import Navigation from '../_shared/components/Navigation/Navigation';

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oriana Connect: Servicio API para generación de documentos electrónicos",
  description: "Servicio API avanzado que simplifica la generación de documentos electrónicos aprobados por la DNIT en Paraguay, garantizando cumplimiento normativo sin complicaciones.",
};

export default function PublicLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<Navigation brandImage='/brand/white/oriana-booking.svg' />
			{children}
		</>
	);
}
