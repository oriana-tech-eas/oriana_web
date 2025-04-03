import Link from 'next/link';
import { ProductInfo } from './_shared/constants';

export default function ProductsSection({ products }: ProductInfo) {
  return (
    <div id="products" className="bg-gray-50 py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Our Solutions</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            The Oriana Suite
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Each application is designed to work independently or as part of an integrated ecosystem.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {products.map((product, idx) => (
            <div key={idx} className={`bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}>
              <div className={`${product.color} h-2`}></div>
              <div className="p-6">
                <div className="flex items-center">
                  <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-md ${product.color} text-white`}>
                    {/* <ProductIcon name={product.icon} /> */}
                  </div>
                  <h3 className={`ml-4 text-xl font-semibold ${product.textColor}`}>{product.name}</h3>
                </div>
                <p className="mt-4 text-gray-600">
                  {product.description}
                </p>
                <div className="mt-6 flex items-center">
                  <Link href={product.href} className={`${product.textColor} font-medium hover:underline`}>
                    Learn more <span aria-hidden="true">→</span>
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