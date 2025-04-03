import Button from "@/components/Button/Button";
import PricingSection from "./PricingSection";
import RegisterBanner from "./RegisterBanner";
import WhyPrintitSection from "./WhyPrintitSection";

export default function Home() {
  return (
    <main>
      <section className="flex items-center flex-col justify-center pt-56">
        <div className="mb-12 text-center flex flex-col items-center justify-center max-w-4xl space-y-4">
          <h1 className="text-6xl font-bold">Simplifica la gestión de tu negocio con <span className="bg-gradient-to-b from-rose-500 to-rose-400 text-transparent bg-clip-text">Oriana Market</span></h1>
          <p className="text-neutral-600 text-xl">Facturación, ventas, stock y más, todo en un solo lugar.</p>
          <Button href="/register" variant="primary">Crear cuenta gratis</Button>
        </div>
        <div className="w-[65dvw] h-[60dvh] bg-neutral-100 border rounded-3xl">
        </div>
      </section>

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
    </main>
  );
}
