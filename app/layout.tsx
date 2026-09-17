import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Visibility — La Rochelle",
  description:
    "Visibilité des agences immobilières de La Rochelle sur les recherches vendeurs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
