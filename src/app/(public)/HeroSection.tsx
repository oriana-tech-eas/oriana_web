import Link from 'next/link';
import { ProductInfo } from './_shared/constants';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/16/solid';

export default function HeroSection({ products }: ProductInfo) {
  return (
    <div className="relative bg-gradient-to-tr from-orange-50 to-zinc-100">
      <div className="container mx-auto px-6 py-24 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-zinc-950">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Soluciones empresariales que trabajan en conjunto
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-800">
              Oriana ofrece una suite de aplicaciones empresariales diseñadas para optimizar sus operaciones. Desde facturación y RRHH hasta programación y gestión documental, nuestro enfoque modular le permite utilizar lo que necesita.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link 
                href="/app" 
                className="rounded-md bg-orange-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-orange-700"
              >
                Comience Ahora
              </Link>
              <Link 
                href="#products" 
                className="text-base font-semibold leading-6 text-orange-600 hover:text-orange-700"
              >
                Explore Nuestras Soluciones <ArrowRightIcon className="h-5 w-5 inline-block" aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white border z-10 border-rose-600/20 backdrop-blur-sm rounded-lg p-5 transform hover:-translate-y-1 transition-transform duration-300">
                  <div className="h-10 w-10 rounded-md bg-white z-10 p-1.5 text-center justify-center mb-3">
                    <Image src={"/brand/square/oriana-market.svg"} alt="Oriana market" width={40} height={40} />
                  </div>
                  <h3 className="font-semibold">{products[0].name}</h3>
                  <p className="text-zinc-400 text-sm mt-1">Market</p>
                </div>
                <div className="bg-white border z-10 border-indigo-600/20 backdrop-blur-sm rounded-lg p-5 transform hover:-translate-y-1 transition-transform duration-300">
                  <div className="h-10 w-10 rounded-md bg-white p-1.5 flex items-center justify-center mb-3">
                    <Image src={"/brand/square/oriana-connect.svg"} alt="Oriana market" width={40} height={40} />
                  </div>
                  <h3 className="font-semibold">{products[1].name}</h3>
                  <p className="text-zinc-400 text-sm mt-1">Connect</p>
                </div>
                <div className="bg-white border z-10 border-emerald-600/20 backdrop-blur-sm rounded-lg p-5 transform hover:-translate-y-1 transition-transform duration-300">
                  <div className="h-10 w-10 rounded-md bg-white p-1.5 flex items-center justify-center mb-3">
                    <Image src={"/brand/square/oriana-people.svg"} alt="Oriana market" width={40} height={40} />
                  </div>
                  <h3 className="font-semibold">{products[2].name}</h3>
                  <p className="text-zinc-400 text-sm mt-1">People</p>
                </div>
                <div className="bg-white border z-10 border-purple-600/20 backdrop-blur-sm rounded-lg p-5 transform hover:-translate-y-1 transition-transform duration-300">
                  <div className="h-10 w-10 rounded-md bg-white p-1.5 flex items-center justify-center mb-3">
                    <Image src={"/brand/square/oriana-booking.svg"} alt="Oriana market" width={40} height={40} />
                  </div>
                  <h3 className="font-semibold">{products[3].name}</h3>
                  <p className="text-zinc-400 text-sm mt-1">Booking</p>
                </div>
              </div>
              <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-full opacity-50 blur-xl"></div>
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-full opacity-50 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-x-0 bottom-0 h-16 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%)' }}></div>
    </div>
  );
}