export interface ProductInfo {
	products: {
		name: string;
		description: string;
		href: string;
		icon: string;
		color: string;
		lightColor: string;
		hoverColor: string;
		textColor: string;
	}[];
}

export const companyLinks = [
	{ name: 'Acerca de', href: '/about' },
	{ name: 'Clientes', href: '/customers' },
	{ name: 'Oportunidades', href: '/careers' },
	{ name: 'Blog', href: '/blog' },
	{ name: 'Contacto', href: '/contact' },
];

export const resourceLinks = [
	{ name: 'Documentación', href: '/docs' },
	{ name: 'Privacidad', href: '/guides' },
	{ name: 'Términos', href: '/api-reference' },
	{ name: 'Soporte', href: '/support' },
];

export const products = [
	{
		name: 'Oriana Market',
		description:
			'Sistema ERP integral que revoluciona la gestión de facturación, gastos y administración financiera de su empresa, potenciando la toma de decisiones estratégicas.',
		short_description: 'Gestión de facturación y solución ERP completa',
		href: '/market',
		icon: '/brand/square/oriana-market.svg',
		color: 'bg-rose-600',
		lightColor: 'bg-rose-50',
		hoverColor: 'hover:bg-rose-50',
		textColor: 'text-rose-800',
	},
	{
		name: 'Oriana Connect',
		description:
			'Servicio API avanzado que simplifica la generación de documentos electrónicos aprobados por la DNIT en Paraguay, garantizando cumplimiento normativo sin complicaciones.',
		short_description: 'Servicio API para generación de documentos electrónicos',
		href: '/connect',
		icon: '/brand/square/oriana-connect.svg',
		color: 'bg-teal-600',
		lightColor: 'bg-teal-50',
		hoverColor: 'hover:bg-teal-50',
		textColor: 'text-teal-800',
	},
	{
		name: 'Oriana People',
		description:
			'Sistema de administración de RRHH intuitivo que transforma la gestión de talento, optimizando procesos críticos tanto de forma independiente como integrado perfectamente con Market.',
		short_description: 'Administración de RRHH y gestión de empleados',
		href: '/people',
		icon: '/brand/square/oriana-people.svg',
		color: 'bg-violet-700',
		lightColor: 'bg-violet-50',
		hoverColor: 'hover:bg-violet-50',
		textColor: 'text-violet-800',
	},
	{
		name: 'Oriana Booking',
		description:
			'Gestor de citas inteligente que maximiza la eficiencia de servicios e individuos, permitiendo una organización perfecta del tiempo tanto de forma autónoma como sincronizado con Market.',
		short_description: 'Sistema de programación y gestión de citas',
		href: '/booking',
		icon: '/brand/square/oriana-booking.svg',
		color: 'bg-amber-600',
		lightColor: 'bg-amber-50',
		hoverColor: 'hover:bg-amber-50',
		textColor: 'text-amber-800',
	},
];
