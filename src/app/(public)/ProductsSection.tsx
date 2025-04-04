import Link from 'next/link';
import { ProductInfo } from './_shared/constants';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function ProductsSection({ products }: ProductInfo) {
  return (
    <div id="products" className="bg-gray-50 py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-orange-600">Nuestras Soluciones</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            La Suite Oriana
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Cada aplicación está diseñada para funcionar de forma independiente o como parte de un ecosistema integrado.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {products.map((product, idx) => (
            <div key={idx} className={`bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}>
              <div className={`${product.color} h-2`}></div>
              <div className="p-6">
                <div className="flex items-center">
                  <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-md`}>
                    <Image src={product.icon} alt={product.name} width={32} height={32} className="h-8 w-8" />
                  </div>
                  <h3 className={`ml-4 text-xl font-semibold ${product.textColor}`}>{product.name}</h3>
                </div>
                <p className="mt-4 text-gray-600">
                  {product.description}
                </p>
                <div className="mt-6 flex items-center">
                  <Link href={product.href} className={`${product.textColor} font-medium hover:underline`}>
                    Descubrir más <ArrowRightIcon className="h-5 w-5 inline-block ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}