import Link from 'next/link';

export default function CtaSection() {
  return (
    <div className="bg-blue-600">
      <div className="container mx-auto px-6 py-16 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to streamline your business?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
          Start with one application or the full suite. Our modular platform grows with your business.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/app"
            className="rounded-md bg-white px-6 py-3 text-base font-semibold text-blue-600 shadow-sm hover:bg-blue-50"
          >
            Get started
          </Link>
          <Link
            href="/contact"
            className="text-base font-semibold leading-6 text-white hover:text-blue-100"
          >
            Contact sales <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}