import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Trottipieces - Pièces détachées pour trottinettes électriques",
  description: "Vente de pièces détachées pour trottinettes électriques. Trottipieces, votre spécialiste en pièces de rechange.",
  icons: {
    icon: "https://trottipieces.fr/wp-content/uploads/2023/11/TP-Logo-Carree.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="https://trottipieces.fr/wp-content/uploads/2023/11/TP-Logo-Carree.png" />
      </head>
      <body className="antialiased flex flex-col min-h-screen font-sans">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
