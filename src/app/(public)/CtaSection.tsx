import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function CtaSection() {
  return (
    <div className="bg-gradient-to-tr from-orange-700 to-orange-600">
      <div className="container mx-auto px-6 py-16 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          ¿Listo para optimizar su negocio?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-orange-100">
          Comience con una aplicación o con la suite completa. Nuestra plataforma modular crece con su empresa.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/app"
            className="rounded-md bg-white px-6 py-3 text-base font-semibold text-orange-600 shadow-sm hover:bg-orange-50"
          >
            Comenzar ahora
          </Link>
          <Link
            href="/contact"
            className="text-base font-semibold leading-6 text-white hover:text-orange-100"
          >
            Contactar con ventas <ArrowRightIcon className="h-5 w-5 inline-block" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}