import { ProductInfo } from "./_shared/constants";

export default function IntegrationSection({ products }: ProductInfo) {
  const integrationPoints = [
    {
      title: "Create invoices from appointments",
      description: "Oriana Booking automatically sends service data to Oriana Market"
    },
    {
      title: "Automate document generation",
      description: "Oriana Connect enables Market to create DNIT-compliant electronic documents"
    },
    {
      title: "Streamline payroll processes",
      description: "Oriana People integrates with Market for seamless financial management"
    }
  ];

  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Built to work together
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our applications are designed to share data seamlessly, eliminating double entry and providing a complete view of your business.
            </p>
            <div className="mt-8 space-y-6">
              {integrationPoints.map((point, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="ml-3 text-base text-gray-600">
                    <span className="font-medium text-gray-900">{point.title}</span> - {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="bg-gray-100 rounded-lg p-8">
              <div className="relative h-80 overflow-hidden">
                {/* Illustration of connected apps */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center z-10 relative">
                    <span className="text-gray-800 font-bold">Oriana</span>
                  </div>
                  <div className="absolute top-0 left-0 -mt-20 -ml-48 w-24 h-24 bg-blue-100 rounded-lg shadow-md flex items-center justify-center transform rotate-6">
                    <div className="h-12 w-12 rounded-md bg-blue-500 text-white flex items-center justify-center">
                      {/* <ProductIcon name="billing" /> */}
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 -mt-16 -mr-48 w-24 h-24 bg-indigo-100 rounded-lg shadow-md flex items-center justify-center transform -rotate-12">
                    <div className="h-12 w-12 rounded-md bg-indigo-500 text-white flex items-center justify-center">
                      {/* <ProductIcon name="connect" /> */}
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 -mb-16 -ml-40 w-24 h-24 bg-emerald-100 rounded-lg shadow-md flex items-center justify-center transform -rotate-12">
                    <div className="h-12 w-12 rounded-md bg-emerald-500 text-white flex items-center justify-center">
                      {/* <ProductIcon name="people" /> */}
                    </div>
                  </div>
                  <div className="absolute bottom-0 right-0 -mb-24 -mr-36 w-24 h-24 bg-purple-100 rounded-lg shadow-md flex items-center justify-center transform rotate-12">
                    <div className="h-12 w-12 rounded-md bg-purple-500 text-white flex items-center justify-center">
                      {/* <ProductIcon name="booking" /> */}
                    </div>
                  </div>
                  {/* Connection lines */}
                  <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 200 200">
                      <line x1="100" y1="100" x2="40" y2="40" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4" />
                      <line x1="100" y1="100" x2="160" y2="40" stroke="#6366f1" strokeWidth="2" strokeDasharray="4" />
                      <line x1="100" y1="100" x2="40" y2="160" stroke="#10b981" strokeWidth="2" strokeDasharray="4" />
                      <line x1="100" y1="100" x2="160" y2="160" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="4" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}