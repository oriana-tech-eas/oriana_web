export interface ProductInfo {
  products: {
    name: string;
    description: string;
    href: string;
    icon: string;
    color: string;
    lightColor: string;
    textColor: string;
  }[];
}

export const products = [
  {
    name: 'Oriana Market',
    description: 'General ERP system for invoicing, expenses and overall billing management of companies',
    href: '/market',
    icon: 'billing',
    color: 'bg-blue-500',
    lightColor: 'bg-blue-50',
    textColor: 'text-blue-600'
  },
  {
    name: 'Oriana Connect',
    description: 'API Service based to generate electronic documents approved by DNIT in Paraguay',
    href: '/connect',
    icon: 'connect',
    color: 'bg-indigo-500',
    lightColor: 'bg-indigo-50',
    textColor: 'text-indigo-600'
  },
  {
    name: 'Oriana People',
    description: 'Simple HR administration system/module that works independently and can work together with Market',
    href: '/people',
    icon: 'people',
    color: 'bg-emerald-500',
    lightColor: 'bg-emerald-50',
    textColor: 'text-emerald-600'
  },
  {
    name: 'Oriana Booking',
    description: 'Appointments manager for services or individuals that works independently and can work together with Market',
    href: '/booking',
    icon: 'booking',
    color: 'bg-purple-500',
    lightColor: 'bg-purple-50',
    textColor: 'text-purple-600'
  }
];