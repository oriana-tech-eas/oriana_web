import Link from 'next/link';
import { ProductInfo } from './_shared/constants';

export default function HeroSection({ products }: ProductInfo) {
  return (
    <div className="relative bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="container mx-auto px-6 py-24 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Business solutions that work together
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Oriana provides a suite of business applications designed to streamline your operations. From billing and HR to scheduling and document management, our modular approach lets you use what you need.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link 
                href="/app" 
                className="rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500"
              >
                Get Started
              </Link>
              <Link 
                href="#products" 
                className="text-base font-semibold leading-6 text-white hover:text-blue-300"
              >
                Explore Solutions <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-600/20 backdrop-blur-sm rounded-lg p-5 transform hover:-translate-y-1 transition-transform duration-300">
                  <div className="h-10 w-10 rounded-md bg-blue-600 text-white flex items-center justify-center mb-3">
                    {/* <ProductIcon name="billing" /> */}
                  </div>
                  <h3 className="text-white font-semibold">{products[0].name}</h3>
                  <p className="text-blue-100 text-sm mt-1">ERP & Billing</p>
                </div>
                <div className="bg-indigo-600/20 backdrop-blur-sm rounded-lg p-5 transform hover:-translate-y-1 transition-transform duration-300">
                  <div className="h-10 w-10 rounded-md bg-indigo-600 text-white flex items-center justify-center mb-3">
                    {/* <ProductIcon name="connect" /> */}
                  </div>
                  <h3 className="text-white font-semibold">{products[1].name}</h3>
                  <p className="text-indigo-100 text-sm mt-1">Document API</p>
                </div>
                <div className="bg-emerald-600/20 backdrop-blur-sm rounded-lg p-5 transform hover:-translate-y-1 transition-transform duration-300">
                  <div className="h-10 w-10 rounded-md bg-emerald-600 text-white flex items-center justify-center mb-3">
                    {/* <ProductIcon name="people" /> */}
                  </div>
                  <h3 className="text-white font-semibold">{products[2].name}</h3>
                  <p className="text-emerald-100 text-sm mt-1">HR Management</p>
                </div>
                <div className="bg-purple-600/20 backdrop-blur-sm rounded-lg p-5 transform hover:-translate-y-1 transition-transform duration-300">
                  <div className="h-10 w-10 rounded-md bg-purple-600 text-white flex items-center justify-center mb-3">
                    {/* <ProductIcon name="booking" /> */}
                  </div>
                  <h3 className="text-white font-semibold">{products[3].name}</h3>
                  <p className="text-purple-100 text-sm mt-1">Scheduling</p>
                </div>
              </div>
              <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-50 blur-xl"></div>
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full opacity-50 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-x-0 bottom-0 h-16 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%)' }}></div>
    </div>
  );
}