import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Printit: Ingresa a tu cuenta",
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="h-dvh w-full flex items-center justify-center bg-gradient-to-tl from-neutral-100 dark:from-neutral-800 to-neutral-50 dark:to-neutral-950">
      <a href="/">
        <Image src="/brand/oriana-market.svg" alt="Printit" className="absolute top-5 left-5 object-contain" width={120} height={36} />
      </a>
      {children}
    </main>
  );
}