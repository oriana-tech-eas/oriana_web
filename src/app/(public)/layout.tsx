import { products } from "./_shared/constants";
import MainFooter from "./_shared/components/Footer";
import MegaMenu from "./_shared/components/MegaMenu";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oriana tech: Su empresa inteligente",
  description: "Construyendo el futuro del software empresarial en Paraguay",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MegaMenu />
      <main className="mt-14">
        {children}
      </main>
      <MainFooter products={products} />
    </>
  );
}
