'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { companyLinks, products, resourceLinks } from '../constants';
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import ActionButtons from './ActionButtons';

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

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-sm fixed w-full top-0 z-50">
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
                className={`text-zinc-600 group inline-flex items-center rounded-md text-base font-medium hover:text-zinc-900 focus:outline-none ${activeMenu === 'products' ? 'text-zinc-900' : ''}`}
                onClick={() => toggleDropdown('products')}
                aria-expanded={activeMenu === 'products'}
              >
                <span>Productos</span>
                <ChevronDownIcon className={`ml-2 h-5 w-5 duration-150 ${activeMenu === 'products' ? 'rotate-180 text-zinc-600' : 'text-zinc-400'}`} />
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
                          <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md border bg-white sm:h-12 sm:w-12`}>
                            <Image src={product.icon} alt={product.name} width={32} height={32} />
                          </div>
                          <div className="ml-4">
                            <p className={`text-base font-medium ${product.textColor}`}>{product.name}</p>
                            <p className="mt-1 text-sm text-zinc-500">{product.short_description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="bg-zinc-50 border-t px-5 py-5 sm:px-8 sm:py-8">
                      <div>
                        <h3 className="text-base font-medium text-zinc-600">¿Listo para empezar?</h3>
                        <div className="mt-3 space-y-3">
                          <Link 
                            href="/login" 
                            className="w-full flex items-center justify-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-orange-700"
                            onClick={closeMenu}
                          >
                            Ir al panel de control
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
                className={`text-zinc-600 group inline-flex items-center rounded-md text-base font-medium hover:text-zinc-900 focus:outline-none ${activeMenu === 'company' ? 'text-zinc-900' : ''}`}
                onClick={() => toggleDropdown('company')}
                aria-expanded={activeMenu === 'company'}
              >
                <span>Empresa</span>
                <ChevronDownIcon className={`ml-2 h-5 w-5 duration-150 ${activeMenu === 'company' ? 'rotate-180 text-zinc-600' : 'text-zinc-400'}`} />
              </button>

              {activeMenu === 'company' && (
                <div className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      {companyLinks.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="-m-3 flex items-start rounded-lg p-3 hover:bg-zinc-50"
                          onClick={closeMenu}
                        >
                          <p className="text-base font-medium text-zinc-900">{item.name}</p>
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
                className={`text-zinc-600 group inline-flex items-center rounded-md text-base font-medium hover:text-zinc-900 focus:outline-none ${activeMenu === 'resources' ? 'text-zinc-900' : ''}`}
                onClick={() => toggleDropdown('resources')}
                aria-expanded={activeMenu === 'resources'}
              >
                <span>Recursos</span>
                <ChevronDownIcon className={`ml-2 h-5 w-5 duration-150 ${activeMenu === 'resources' ? 'rotate-180 text-zinc-600' : 'text-zinc-400'}`} />
              </button>

              {activeMenu === 'resources' && (
                <div className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      {resourceLinks.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="-m-3 flex items-start rounded-lg p-3 hover:bg-zinc-50"
                          onClick={closeMenu}
                        >
                          <p className="text-base font-medium text-zinc-900">{item.name}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/pricing"
              className="text-base font-medium text-zinc-600 hover:text-zinc-900"
              onClick={closeMenu}
            >
              Precios
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
              <ActionButtons orientation='desktop' closeMenu={closeMenu} />
            </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
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
            <div className="border-b border-zinc-200 py-2">
              <button
                className="flex w-full items-center justify-between text-left text-base font-medium text-zinc-600"
                onClick={() => toggleDropdown('products-mobile')}
              >
                Productos
                <svg
                  className={`ml-2 h-5 w-5 ${activeMenu === 'products-mobile' ? 'rotate-180 text-zinc-600' : 'text-zinc-400'}`}
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
                      className="block rounded-md py-2 pl-10 pr-3 text-base font-medium text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
                      onClick={closeMenu}
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="border-b border-zinc-200 py-2">
              <button
                className="flex w-full items-center justify-between text-left text-base font-medium text-zinc-600"
                onClick={() => toggleDropdown('company-mobile')}
              >
                Empresa
                <svg
                  className={`ml-2 h-5 w-5 ${activeMenu === 'company-mobile' ? 'rotate-180 text-zinc-600' : 'text-zinc-400'}`}
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
                      className="block rounded-md py-2 pl-10 pr-3 text-base font-medium text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
                      onClick={closeMenu}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="border-b border-zinc-200 py-2">
              <button
                className="flex w-full items-center justify-between text-left text-base font-medium text-zinc-600"
                onClick={() => toggleDropdown('resources-mobile')}
              >
                Recursos
                <svg
                  className={`ml-2 h-5 w-5 ${activeMenu === 'resources-mobile' ? 'rotate-180 text-zinc-600' : 'text-zinc-400'}`}
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
                      className="block rounded-md py-2 pl-10 pr-3 text-base font-medium text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
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
              className="block border-b border-zinc-200 py-2 pl-3 pr-4 text-base font-medium text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
              onClick={closeMenu}
            >
              Precios
            </Link>

            <div className="pt-4 pb-3 space-y-1">
              <ActionButtons orientation='mobile' closeMenu={closeMenu} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}