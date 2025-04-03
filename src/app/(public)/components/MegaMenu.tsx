'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function MegaMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setActiveMenu(null);
    }
  };

  interface DropdownMenu {
    menu: string;
  }

  const toggleDropdown = (menu: DropdownMenu['menu']) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setActiveMenu(null);
  };

  const products = [
    {
      name: 'Market',
      description: 'Billing management and complete ERP solution',
      href: '/market',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
        </svg>
      ),
      color: 'bg-blue-500',
      textColor: 'text-blue-600',
      shadowColor: 'shadow-blue-100',
      hoverColor: 'hover:bg-blue-50',
      appUrl: '/app/market'
    },
    {
      name: 'Connect',
      description: 'API service for electronic document generation',
      href: '/connect',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
        </svg>
      ),
      color: 'bg-indigo-500',
      textColor: 'text-indigo-600',
      shadowColor: 'shadow-indigo-100',
      hoverColor: 'hover:bg-indigo-50',
      appUrl: '/app/connect'
    },
    {
      name: 'People',
      description: 'HR administration and employee management',
      href: '/people',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      ),
      color: 'bg-emerald-500',
      textColor: 'text-emerald-600',
      shadowColor: 'shadow-emerald-100',
      hoverColor: 'hover:bg-emerald-50',
      appUrl: '/app/people'
    },
    {
      name: 'Booking',
      description: 'Appointment scheduling and management system',
      href: '/booking',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
        </svg>
      ),
      color: 'bg-purple-500',
      textColor: 'text-purple-600',
      shadowColor: 'shadow-purple-100',
      hoverColor: 'hover:bg-purple-50',
      appUrl: '/app/booking'
    }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Customers', href: '/customers' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const resourceLinks = [
    { name: 'Documentation', href: '/docs' },
    { name: 'Guides', href: '/guides' },
    { name: 'API Reference', href: '/api-reference' },
    { name: 'Support', href: '/support' },
  ];

  return (
    <header className="bg-white/60 backdrop-blur-md shadow-sm fixed w-full top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Global">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center" onClick={closeMenu}>
              <Image src="/brand/oriana-tech.svg" alt="Oriana tech" width={100} height={50} />
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <div className="relative">
              <button
                type="button"
                className={`text-gray-600 group inline-flex items-center rounded-md text-base font-medium hover:text-gray-900 focus:outline-none ${activeMenu === 'products' ? 'text-gray-900' : ''}`}
                onClick={() => toggleDropdown('products')}
                aria-expanded={activeMenu === 'products'}
              >
                <span>Products</span>
                <svg
                  className={`ml-2 h-5 w-5 ${activeMenu === 'products' ? 'rotate-180 text-gray-600' : 'text-gray-400'}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </button>

              {activeMenu === 'products' && (
                <div className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      {products.map((product) => (
                        <Link
                          key={product.name}
                          href={product.href}
                          className={`-m-3 flex items-start rounded-lg p-3 ${product.hoverColor}`}
                          onClick={closeMenu}
                        >
                          <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md ${product.color} text-white sm:h-12 sm:w-12`}>
                            {product.icon}
                          </div>
                          <div className="ml-4">
                            <p className={`text-base font-medium ${product.textColor}`}>{product.name}</p>
                            <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="bg-gray-50 px-5 py-5 sm:px-8 sm:py-8">
                      <div>
                        <h3 className="text-base font-medium text-gray-500">Ready to get started?</h3>
                        <div className="mt-3 space-y-3">
                          <Link 
                            href="/app" 
                            className="w-full flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700"
                            onClick={closeMenu}
                          >
                            Go to Dashboard
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                type="button"
                className={`text-gray-600 group inline-flex items-center rounded-md text-base font-medium hover:text-gray-900 focus:outline-none ${activeMenu === 'company' ? 'text-gray-900' : ''}`}
                onClick={() => toggleDropdown('company')}
                aria-expanded={activeMenu === 'company'}
              >
                <span>Company</span>
                <svg
                  className={`ml-2 h-5 w-5 ${activeMenu === 'company' ? 'rotate-180 text-gray-600' : 'text-gray-400'}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </button>

              {activeMenu === 'company' && (
                <div className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      {companyLinks.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                          onClick={closeMenu}
                        >
                          <p className="text-base font-medium text-gray-900">{item.name}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                type="button"
                className={`text-gray-600 group inline-flex items-center rounded-md text-base font-medium hover:text-gray-900 focus:outline-none ${activeMenu === 'resources' ? 'text-gray-900' : ''}`}
                onClick={() => toggleDropdown('resources')}
                aria-expanded={activeMenu === 'resources'}
              >
                <span>Resources</span>
                <svg
                  className={`ml-2 h-5 w-5 ${activeMenu === 'resources' ? 'rotate-180 text-gray-600' : 'text-gray-400'}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </button>

              {activeMenu === 'resources' && (
                <div className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      {resourceLinks.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                          onClick={closeMenu}
                        >
                          <p className="text-base font-medium text-gray-900">{item.name}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/pricing"
              className="text-base font-medium text-gray-600 hover:text-gray-900"
              onClick={closeMenu}
            >
              Pricing
            </Link>

            <div className="flex items-center space-x-4">
              <Link
                href="/login"
                className="text-base font-medium text-gray-600 hover:text-gray-900"
                onClick={closeMenu}
              >
                Iniciar Sesión
              </Link>
              <Link
                href="/register"
                className="ml-8 inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700"
                onClick={closeMenu}
              >
                Registrarse
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              onClick={toggleMenu}
              aria-expanded={isOpen}
            >
              <span className="sr-only">{isOpen ? 'Close main menu' : 'Open main menu'}</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <div className="border-b border-gray-200 py-2">
              <button
                className="flex w-full items-center justify-between text-left text-base font-medium text-gray-600"
                onClick={() => toggleDropdown('products-mobile')}
              >
                Products
                <svg
                  className={`ml-2 h-5 w-5 ${activeMenu === 'products-mobile' ? 'rotate-180 text-gray-600' : 'text-gray-400'}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </button>
              {activeMenu === 'products-mobile' && (
                <div className="mt-2 space-y-2">
                  {products.map((product) => (
                    <Link
                      key={product.name}
                      href={product.href}
                      className="block rounded-md py-2 pl-10 pr-3 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      onClick={closeMenu}
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="border-b border-gray-200 py-2">
              <button
                className="flex w-full items-center justify-between text-left text-base font-medium text-gray-600"
                onClick={() => toggleDropdown('company-mobile')}
              >
                Company
                <svg
                  className={`ml-2 h-5 w-5 ${activeMenu === 'company-mobile' ? 'rotate-180 text-gray-600' : 'text-gray-400'}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </button>
              {activeMenu === 'company-mobile' && (
                <div className="mt-2 space-y-2">
                  {companyLinks.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block rounded-md py-2 pl-10 pr-3 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      onClick={closeMenu}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="border-b border-gray-200 py-2">
              <button
                className="flex w-full items-center justify-between text-left text-base font-medium text-gray-600"
                onClick={() => toggleDropdown('resources-mobile')}
              >
                Resources
                <svg
                  className={`ml-2 h-5 w-5 ${activeMenu === 'resources-mobile' ? 'rotate-180 text-gray-600' : 'text-gray-400'}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </button>
              {activeMenu === 'resources-mobile' && (
                <div className="mt-2 space-y-2">
                  {resourceLinks.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block rounded-md py-2 pl-10 pr-3 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      onClick={closeMenu}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/pricing"
              className="block border-b border-gray-200 py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              onClick={closeMenu}
            >
              Pricing
            </Link>

            <div className="pt-4 pb-3 space-y-1">
              <Link
                href="/login"
                className="block w-full rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                onClick={closeMenu}
              >
                Iniciar Sesión
              </Link>
              <Link
                href="/register"
                className="block w-full rounded-md bg-blue-600 px-3 py-2 text-center text-base font-medium text-white hover:bg-blue-700"
                onClick={closeMenu}
              >
                Registrarse
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}