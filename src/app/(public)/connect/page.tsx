import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <main>
      <section className="flex items-center flex-col justify-center pt-56">
        <div className="mb-12 text-center flex flex-col items-center justify-center max-w-4xl space-y-4">
          <h1 className="text-6xl font-bold">Facturación electrónica simplificada</h1>
          <p className="text-neutral-600 text-xl">Emiti documentos electrónicos de manera rápida y sencilla</p>
          <Button href="/register" variant="primary">Empezar ahora</Button>
        </div>
      </section>
    </main>
  );
}
