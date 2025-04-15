import React from 'react';
import Image from 'next/image';
import Button from '@/components/Button/Button';
import { CheckIcon } from '@heroicons/react/24/outline';

interface Product {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  features: string[];
  prices: {
    monthly: number;
    yearly: number;
  };
}

interface SubscriptionCardProps {
  product: Product;
  billingCycle: 'monthly' | 'yearly';
  formatPrice: (price: number) => string;
  onSubscribe: (productId: string, billingCycle: 'monthly' | 'yearly') => void;
  isActive?: boolean;
}

const colorVariants = {
  rose: {
    background: 'bg-rose-50 dark:bg-rose-900/20',
    border: 'border-rose-200 dark:border-rose-800',
    icon: 'text-rose-500 dark:text-rose-400',
    button: 'primary-market',
    active: 'bg-rose-100 dark:bg-rose-800/30',
    check: 'text-rose-500 dark:text-rose-400',
  },
  teal: {
    background: 'bg-teal-50 dark:bg-teal-900/20',
    border: 'border-teal-200 dark:border-teal-800',
    icon: 'text-teal-500 dark:text-teal-400',
    button: 'primary-connect',
    active: 'bg-teal-100 dark:bg-teal-800/30',
    check: 'text-teal-500 dark:text-teal-400',
  },
  violet: {
    background: 'bg-violet-50 dark:bg-violet-900/20',
    border: 'border-violet-200 dark:border-violet-800',
    icon: 'text-violet-500 dark:text-violet-400',
    button: 'primary-people',
    active: 'bg-violet-100 dark:bg-violet-800/30',
    check: 'text-violet-500 dark:text-violet-400',
  },
  amber: {
    background: 'bg-amber-50 dark:bg-amber-900/20',
    border: 'border-amber-200 dark:border-amber-800',
    icon: 'text-amber-500 dark:text-amber-400',
    button: 'primary-booking',
    active: 'bg-amber-100 dark:bg-amber-800/30',
    check: 'text-amber-500 dark:text-amber-400',
  },
};

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({
  product,
  billingCycle,
  formatPrice,
  onSubscribe,
  isActive = false,
}) => {
  const colorScheme = colorVariants[product.color as keyof typeof colorVariants];
  const price = billingCycle === 'monthly' ? product.prices.monthly : product.prices.yearly;
  const discount = billingCycle === 'yearly' ? 'Ahorro del 15%' : '';
  const buttonText = isActive ? 'Administrar' : 'Subscribirse';

  return (
    <div className={`rounded-xl overflow-hidden border ${colorScheme.border} transition-all hover:shadow-md`}>
      <div className={`p-6 ${colorScheme.background}`}>
        <div className="flex items-center mb-4">
          <div className="h-12 w-12 rounded-lg bg-white flex items-center justify-center mr-4 border border-neutral-200">
            <Image src={product.icon} alt={product.name} width={32} height={32} />
          </div>
          <div>
            <h3 className="text-lg font-bold dark:text-white">{product.name}</h3>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm">{discount}</p>
          </div>
        </div>
        
        <p className="text-neutral-600 dark:text-neutral-300 text-sm mb-4">{product.description}</p>
        
        <div className="mb-4">
          <div className="text-3xl font-bold dark:text-white">{formatPrice(price)}</div>
          <div className="text-neutral-500 dark:text-neutral-400 text-sm">
            {billingCycle === 'monthly' ? 'por mes' : 'por año'}
          </div>
        </div>
        
        <Button 
          variant={colorScheme.button as any} 
          className="w-full"
          onClick={() => onSubscribe(product.id, billingCycle)}
        >
          {buttonText}
        </Button>
        
        {isActive && (
          <div className="mt-2 text-center">
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
              Activo
            </span>
          </div>
        )}
      </div>
      
      <div className="p-6 bg-white dark:bg-neutral-800">
        <h4 className="font-semibold mb-4 dark:text-white">Características:</h4>
        <ul className="space-y-2">
          {product.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckIcon className={`h-5 w-5 ${colorScheme.check} mr-2 flex-shrink-0 mt-0.5`} />
              <span className="text-neutral-600 dark:text-neutral-300 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SubscriptionCard;