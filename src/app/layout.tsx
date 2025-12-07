import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Executive Telecom - Le Meilleur de la Télévision",
  description:
    "Executive Telecom - Votre partenaire pour une expérience télévisuelle de qualité en Afrique. Plus de 200 chaînes en Haute Définition.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
