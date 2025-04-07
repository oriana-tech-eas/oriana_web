import Button from "@/components/Button/Button";
import PricingSection from "./PricingSection";
import RegisterBanner from "./RegisterBanner";
import WhyPrintitSection from "./WhyPrintitSection";
import SharedHeroSection from "../_shared/components/SharedHeroSection";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oriana Market: Tu aliado en la gestión empresarial",
  description: "Oriana Market es una plataforma integral para la gestión de tu negocio, que incluye facturación, ventas, stock y más. Simplifica tus procesos y optimiza tu tiempo con nuestra herramienta fácil de usar.",
};

export default function Home() {
  return (
    <div className="-mt-[77px]">
      <SharedHeroSection colors={["from-rose-50", "to-rose-100"]}>
        <div>
          <h1 className='text-4xl font-bold tracking-tight sm:text-5xl'>
            Simplifica la gestión de tu negocio con <span className="bg-gradient-to-b from-rose-500 to-rose-400 text-transparent bg-clip-text">Oriana Market</span>
          </h1>
          <p className='mt-6 text-lg leading-8'>
            Facturación, ventas, stock y más, todo en un solo lugar.
          </p>
          <div className='mt-10 flex items-center gap-x-6'>
            <Button href="/register" size="lg" variant="primary-market">Crear cuenta gratis</Button>
            <Button href="/register" size="lg" variant="white-market">Saber más</Button>
          </div>
        </div>
      </SharedHeroSection>

      <section className="py-28 max-w-5xl mx-auto text-center space-y-2">
          <h2 className="text-4xl font-bold">
            Tu herramienta integral para el éxito de tu empresa
          </h2>
          <p className="text-neutral-600">
            Empieza a automatizar y optimizar tu negocio hoy mismo. Prueba gratis la versión Pro durante 30 días.
          </p>
      </section>

      <WhyPrintitSection />
      <PricingSection />
      <RegisterBanner />
    </div>
  );
}
