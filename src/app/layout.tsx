import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./provider";
import SessionGuard from "@/components/SessionGuard/SessionGuard";

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
    <html lang="es" suppressHydrationWarning>
        <body className={inter.className}>
          <Providers>
            <SessionGuard>
              {children}
            </SessionGuard>
          </Providers>
        </body>
    </html>
  );
}
