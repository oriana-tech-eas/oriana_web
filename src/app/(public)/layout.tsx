import { products } from "./_shared/constants";
import MainFooter from "./components/Footer";
import MegaMenu from "./components/MegaMenu";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oriana tech: Su empresa inteligente",
  description: "Facturación y contabilidad para empresas pequeñas y medianas.",
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
