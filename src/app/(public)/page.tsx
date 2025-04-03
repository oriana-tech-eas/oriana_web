import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <main>
      <section className="flex items-center flex-col justify-center pt-56">
        <div className="mb-12 text-center flex flex-col items-center justify-center max-w-4xl space-y-4">
          <h1 className="text-6xl font-bold">Oriana tech</h1>
          <Button href="/market" variant="secondary">Market</Button>
          <Button href="/connect" variant="secondary">Connect</Button>
          <Button href="/booking" variant="secondary">Booking</Button>
          <Button href="/people" variant="secondary">People</Button>
        </div>
      </section>
    </main>
  );
}
