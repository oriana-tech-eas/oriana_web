import Button from "@/components/Button/Button";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import SharedHeroSection from "../_shared/components/SharedHeroSection";
import ConsoleHero from "./components/ConsoleHero";
import FeaturesSection from "./FeaturesSection";
import APIDocSection from "./ApiDocSection";
import IntegrationSection from "./IntegrationSection";

export default function Home() {
  return (
    <div className="bg-white -mt-14">
      <SharedHeroSection colors={["from-teal-700", "to-teal-600"]}>
        <div className="text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Oriana Connect
          </h1>
          <p className="mt-6 text-lg leading-8">
            Servicio API para la generación de documentos electrónicos aprobados por la DNIT en Paraguay. Simplifique sus requisitos de cumplimiento normativo con nuestra integración sin esfuerzos.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Button
              variant="white-connect"
              size="lg"
              href="/app/connect" 
            >
              Comenzar Ahora
            </Button>
            <Link 
              href="#api-docs" 
              className="text-base font-semibold leading-6 text-white hover:text-teal-100"
            >
              Documentación <ArrowRightIcon className="h-5 w-5 inline-block" aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="hidden lg:block">
          <ConsoleHero />
        </div>
      </SharedHeroSection>

      {/* Features Section */}
      <FeaturesSection />

      {/* API Documentation Preview */}
      <APIDocSection />

      {/* Integration with Other Products */}
      <IntegrationSection />

      {/* CTA Section */}
      <div className="bg-teal-700">
        <div className="container mx-auto px-6 py-16 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            ¿Listo para simplificar su documentación electrónica?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-teal-200">
            Únase a empresas de todo Paraguay que confían en Oriana Connect para sus documentos electrónicos conformes con la DNIT.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/app/connect"
              className="rounded-md bg-white px-6 py-3 text-base font-semibold text-teal-700 shadow-sm hover:bg-teal-50"
            >
              Inicie su integración
            </Link>
            <Link
              href="#"
              className="text-base font-semibold leading-6 text-white hover:text-teal-200"
            >
              Agendar una demostración <ArrowRightIcon className="h-5 w-5 inline-block ml-1" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
