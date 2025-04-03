import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { ProductInfo } from "./_shared/constants";
import Image from "next/image";

export default function IntegrationSection({ products }: ProductInfo) {
  const integrationPoints = [
    {
      title: "Genere facturas desde citas programadas",
      description: "Oriana Booking envía automáticamente los datos de servicios a Oriana Market, transformando sus compromisos en ingresos."
    },
    {
      title: "Automatice la generación de documentos",
      description: "Oriana Connect permite a Market crear documentos electrónicos que cumplen con la DNIT, garantizando su conformidad regulatoria sin esfuerzo adicional."
    },
    {
      title: "Optimice los procesos de nómina",
      description: "Oriana People se integra perfectamente con Market para una gestión financiera fluida, conectando su talento humano con sus operaciones comerciales."
    }
  ];

  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Diseñados para trabajar en conjunto
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Nuestras aplicaciones están diseñadas para compartir datos sin interrupciones, eliminando la doble entrada y proporcionando una visión completa de su negocio.
            </p>
            <div className="mt-8 space-y-6">
              {integrationPoints.map((point, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckCircleIcon className="h-6 w-6 text-orange-700" aria-hidden="true" />
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
                    <Image src={'/brand/oriana-tech.svg'} alt={'Oriana tech'} width={90} height={32} />
                  </div>
                  <div className="absolute top-0 left-0 -mt-20 -ml-48 w-24 h-24 bg-blue-100 rounded-lg shadow-md flex items-center justify-center transform rotate-6">
                    <div className="h-12 w-12 rounded-md bg-blue-500 text-white flex items-center justify-center">
                      <Image src={products[0].icon} alt={products[0].name} width={32} height={32} />
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 -mt-16 -mr-48 w-24 h-24 bg-indigo-100 rounded-lg shadow-md flex items-center justify-center transform -rotate-12">
                    <div className="h-12 w-12 rounded-md bg-indigo-500 text-white flex items-center justify-center">
                      <Image src={products[1].icon} alt={products[1].name} width={32} height={32} />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 -mb-16 -ml-40 w-24 h-24 bg-emerald-100 rounded-lg shadow-md flex items-center justify-center transform -rotate-12">
                    <div className="h-12 w-12 rounded-md bg-emerald-500 text-white flex items-center justify-center">
                      <Image src={products[2].icon} alt={products[2].name} width={32} height={32} />
                    </div>
                  </div>
                  <div className="absolute bottom-0 right-0 -mb-24 -mr-36 w-24 h-24 bg-purple-100 rounded-lg shadow-md flex items-center justify-center transform rotate-12">
                    <div className="h-12 w-12 rounded-md bg-purple-500 text-white flex items-center justify-center">
                      <Image src={products[3].icon} alt={products[3].name} width={32} height={32} />
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