'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import { useFloating, useInteractions, useDismiss, useClick, offset, autoUpdate, flip, shift } from '@floating-ui/react';

interface ProductOption {
  name: string;
  logo: string;
  url: string;
  color: string;
}

const ProductSwitcher = ({ currentLogo, baseUrl }: { currentLogo: string, baseUrl: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  // Define available products
  const products: ProductOption[] = [
    {
      name: 'Market',
      logo: '/brand/square/oriana-market.svg',
      url: '/app/market/dashboard',
      color: 'bg-rose-100 text-rose-800 dark:bg-rose-900/50 dark:text-rose-200'
    },
    {
      name: 'Booking',
      logo: '/brand/square/oriana-booking.svg',
      url: '/app/booking/dashboard',
      color: 'bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-200'
    },
    {
      name: 'Connect',
      logo: '/brand/square/oriana-connect.svg',
      url: '/app/connect/dashboard',
      color: 'bg-teal-100 text-teal-800 dark:bg-teal-900/50 dark:text-teal-200'
    },
    {
      name: 'People',
      logo: '/brand/square/oriana-people.svg',
      url: '/app/people/dashboard',
      color: 'bg-violet-100 text-violet-800 dark:bg-violet-900/50 dark:text-violet-200'
    }
  ];

  // Find current product based on logo
  const currentProduct = products.find(p => p.logo === currentLogo) || products[0];

  // Set up floating UI for dropdown
  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [
      offset(5),
      flip({ padding: 10 }),
      shift()
    ],
    whileElementsMounted: autoUpdate,
    placement: 'bottom-start'
  });

  const dismiss = useDismiss(context);
  const click = useClick(context);
  
  const { getReferenceProps, getFloatingProps } = useInteractions([
    dismiss,
    click
  ]);

  // Handle product selection
  const handleSelectProduct = (productUrl: string) => {
    setIsOpen(false);
    router.push(productUrl);
  };

  return (
    <div className="relative">
      <button
        ref={refs.setReference}
        {...getReferenceProps()}
        className="flex items-center w-full p-2 rounded-lg border dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
      >
        <Image 
          src={currentLogo}
          alt={currentProduct.name}
          width={100}
          height={28}
          className="mr-2"
        />
        <ChevronDownIcon className="h-4 w-4 ml-auto text-neutral-500 dark:text-neutral-400" />
      </button>

      {isOpen && (
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
          className="bg-white dark:bg-neutral-900 border dark:border-neutral-700 rounded-lg shadow-lg z-50 w-64 pt-2 animate-in fade-in-0 zoom-in-95 duration-100"
        >
          <div className="px-3 py-2 text-xs font-medium text-neutral-500 dark:text-neutral-400">
            Cambiar producto
          </div>
          
          <div className="mt-1">
            {products.map((product) => (
              <button
                key={product.name}
                className={`flex items-center w-full px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 ${
                  product.logo === currentLogo ? 'bg-neutral-50 dark:bg-neutral-800' : ''
                }`}
                onClick={() => handleSelectProduct(product.url)}
              >
                <div className="flex items-center">
                  <Image 
                    src={product.logo}
                    alt={product.name}
                    width={24}
                    height={24}
                    className="mr-2"
                  />
                  <span className={`ml-2 text-sm `}>
                    Oriana {product.name}
                  </span>
                </div>
              </button>
            ))}
          </div>
          
          <div className="border-t dark:border-neutral-700 mt-2 pt-2 px-3 py-2">
            <Link
              href="/settings/products"
              className="inline-flex w-full justify-between text-xs text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200"
            >
              Administrar productos <ArrowRightIcon className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductSwitcher;