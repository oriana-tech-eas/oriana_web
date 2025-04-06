import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./provider";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Oriana Market: Su empresa inteligente",
  description: "Facturación y contabilidad para empresas pequeñas y medianas.",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <meta name="apple-mobile-web-app-title" content="Oriana" />
      </Head>
      <html lang="es" suppressHydrationWarning>
          <body className={inter.className}>
            <Providers>
              {children}
            </Providers>
          </body>
      </html>
    </>
  );
}
